import path from "path";
import * as fs from "fs";
import { parse, printSchema } from "graphql";
import { codegen } from "@graphql-codegen/core";
import { Types } from "@graphql-codegen/plugin-helpers";
import * as schemaAstPlugin from "@graphql-codegen/schema-ast";

import { schema } from "../graphql/schema";

export async function performAstCodegen(): Promise<void> {
    const options: Types.GenerateOptions = {
        config: {
            numericEnums: true,
            useIndexSignature: true,
        },
        documents: [],
        filename: "schema.graphql",
        schema: parse(printSchema(schema)),
        plugins: [{ "schema-ast": {} }],
        pluginMap: {
            "schema-ast": schemaAstPlugin,
        },
    };
    // performCodegen(options);
    const output = await codegen(options);
    fs.writeFile(path.join(__dirname, "../graphql/generated/", options.filename), output, (error) => {
        if (error) {
            console.error(error);
        }
    });
}
