import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { tag } from "../../../types";
import { set_params } from "../../../utils";
import styles from "./style"

export type tag_args = {
    focus: boolean,
    onClick: function,
    changeColor: boolean,
}

/**
 * Display for tags. Can be modified using "args" keywords.
 * @param {tag} tag
 * @param {tag_args} args
 * @returns 
 */
export default function TagIcon({ tag, args }: {
    tag: tag,
    args: tag_args
}) {

    var default_args = {
        "focus": false,
        "onClick": null,
        "changeColor": false,
    };
    args = set_params(default_args, args);

    const [enabled, toggleEnabled] = useState(false);

    const onPressed = () => {
        if (args.changeColor)
            toggleEnabled(!enabled);

        if (args.onClick)
            args.onClick(tag)
    }

    var unit = tag.unit;
    if (tag && tag.unitLong != undefined) {
        unit = tag.unitLong;
    }

    return (
        <Pressable style={[styles.boxContainer, enabled && styles.enabled]}
            onPress={onPressed}>
            <Text style={[styles.text, args.focus ? styles.textFocus : enabled ? styles.enabledText : styles.textLesser]}>
                <Text>{tag.name}</Text>
                {
                    (tag.amount != null) &&
                    <Text style={styles.textLesserContent}>: {tag.amount} {unit}</Text>
                }
            </Text>
        </Pressable>
    )

}