  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Built-In Types, Data Objects, Functions, and Constructors](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in.htm) →  [Built-In Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_objects.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20The%20Constant%20space%2C%20ABENSPACE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

The Constant space

The program-global constant space has the data type c, length 1, and contains a blank character.

Hints

-   For the constant space, trailing blanks are ignored in most operand positions, as for all character-like fields with fixed lengths. The constant space should therefore not be used in such positions.
-   The name space is reserved and cannot be used in any context for other data objects, structure components, attributes, or formal parameters.
-   An exception to the latter are the obsolete [anonymous components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenanonymous_components.htm) of structures.

Example

The result of the following [concatenation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapconcatenate.htm) is a string with exactly one blank. The blanks in the first two spaces specified are ignored. Blanks are only respected after SEPARATED BY. Except for space, this example also applies to a [text field literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_field_literal_glosry.htm "Glossary Entry") ' ' with exactly one blank character.

DATA text TYPE string.
CONCATENATE space space INTO text SEPARATED BY space.