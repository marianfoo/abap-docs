  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentypes_and_objects.htm) →  [Declaring Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobjects_statements.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CONSTANTS, ABAPCONSTANTS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for
 improvement:)

CONSTANTS

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconstants_shortref.htm)

Syntax

CONSTANTS const *\[*[options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata.htm)*\]*.

Effect

This statement declares a constant data object or a constant const for short. Its content cannot be changed at runtime of an ABAP program. It can only be used as an operand in [read positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenread_position_glosry.htm "Glossary Entry") of ABAP statements. Constants declared in the declaration part of a class or an interface belong to their [static attributes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstatic_attribute_glosry.htm "Glossary Entry").

The [naming conventions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennaming_conventions.htm) apply to the name const. The syntax of the additions options of the statement CONSTANTS for declaring constants matches the statement [DATA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata.htm) for declaring variables. Only the additions [READ-ONLY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_options.htm) and [BOXED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_boxed.htm), and declarations of [LOB handle structures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_lob_handle.htm) are not possible. In addition, the statement INCLUDE cannot be used within the declaration of a structure.

Unlike the statement DATA, an [initial value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstart_value_glosry.htm "Glossary Entry") with the addition [VALUE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_options.htm) must be specified in the statement CONSTANTS. The same restrictions as for DATA apply. This has the following implications for the declaration of constants with [deep](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeep_glosry.htm "Glossary Entry") data types:

-   A start value val can only be specified for the ABAP types string and xstring only.
-   Constant internal tables, reference variables, and structures with non-character-like and flat components can only be assigned their [initial value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninitial_value_glosry.htm "Glossary Entry") by IS INITIAL only, and are therefore always initial.

Hints

-   If the class component selector is used, the interface name can also be used to access static attributes of interfaces declared using CONSTANTS.
-   Constants are stored in the [PXA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpxa_glosry.htm "Glossary Entry") and are available to all programs.
-   Constants cannot be declared with [inline declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninline_declaration_glosry.htm "Glossary Entry") and results of expressions cannot be assigned to constants. For such purposes, ABAP supports [immutable variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenimmutable_variable_glosry.htm "Glossary Entry") that can be declared with the declaration operator [FINAL(var)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfinal_inline.htm).

Example

The statements below declare a numeric constant, a constant structure, and a constant reference. The latter can be used in comparisons or in passing to [procedures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocedure_glosry.htm "Glossary Entry").

CONSTANTS pi TYPE p LENGTH 8 DECIMALS 14
             VALUE '3.14159265358979'.
CONSTANTS: BEGIN OF sap\_ag,
             zip\_code TYPE n LENGTH 5 VALUE '69189',
             city     TYPE string VALUE \`Walldorf\`,
             country  TYPE string VALUE \`Germany\`,
           END OF sap\_ag.
CONSTANTS null\_pointer TYPE REF TO object VALUE IS INITIAL.