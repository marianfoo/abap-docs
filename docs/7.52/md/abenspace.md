  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Predefined Types, Data Objects, Functions, and Constructors](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in.htm) →  [Predefined Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_objects.htm) → 

The Constant space

The program-global constant space has the data type c, length 1, and contains a blank character.

Note

For the constant space, trailing blanks are ignored in most operand positions, as for all character-like fields with fixed lengths. The constant space should not, therefore, be used in these positions.

The name space is reserved and cannot be used in any context for other data objects, structure components, attributes, or formal parameters. An exception to this are the obsolete [anonymous components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenanonymous_components.htm) of structures.

Example

The result of the following [concatenation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapconcatenate.htm) is a string with exactly one blank. The blank characters in the first two spaces specified are ignored. Blank characters are only respected after SEPARATED BY. With the same result (except for space), this example also applies to a [text field literal](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_field_literal_glosry.htm "Glossary Entry") ' ' with exactly one blank character.

DATA text TYPE string.
CONCATENATE space space INTO text SEPARATED BY space.