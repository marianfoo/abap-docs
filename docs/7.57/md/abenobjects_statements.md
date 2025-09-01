  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentypes_and_objects.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Declaring Data Objects, ABENOBJECTS_STATEMENTS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion for improvement:)

Declaring Data Objects

A data object is an instance of a data type and occupies as much memory space as its type specifies. An ABAP program only works with data that is available as content of data objects. Data objects are either created implicitly in their declaration as [named data objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennamed_data_object_glosry.htm "Glossary Entry") or explicitly as [anonymous data objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenanonymous_data_object_glosry.htm "Glossary Entry") using [CREATE DATA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcreate_data.htm) or the [instance operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninstance_operator_glosry.htm "Glossary Entry") [NEW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_new.htm).

-   The following are data objects that are not declared using keywords:
    -   [Literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenliteral.htm) are data objects that are declared in operand positions using literal source code.
    -   [Text symbols](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_symbols.htm) are character-like constant data objects that are declared outside the program.
-   Declaration of variables and constants in every context:
    -   [DATA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata.htm)
    -   [CONSTANTS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconstants.htm)
-   Declaration of static attributes in classes:
    -   [CLASS-DATA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass-data.htm)
-   Declaration of static variables in procedures:
    -   [STATICS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapstatics.htm)
-   Declaration of interface work areas:
    -   [TABLES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptables.htm)
    -   [NODES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapnodes.htm) (obsolete)

Continue
[Literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenliteral.htm)
[Text Symbols](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_symbols.htm)
[DATA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata.htm)
[CONSTANTS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconstants.htm)
[STATICS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapstatics.htm)
[TABLES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptables.htm)