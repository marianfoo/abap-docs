---
title: "Data Objects"
description: |
  A data object is an instance of a data type and occupies as much memory space as is allowed by its type. An ABAP program only works with data that is available as content of data objects. Data objects are either created implicitly in their declaration as named data objects(https://help.sap.com/doc
version: "latest"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobjects_statements.htm"
abapFile: "abenobjects_statements.htm"
keywords: ["do", "if", "case", "try", "class", "data", "abenobjects", "statements"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_declarations.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Data%20Objects%2C%20ABENOBJECTS_STATEMENTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Data Objects

A data object is an instance of a data type and occupies as much memory space as is allowed by its type. An ABAP program only works with data that is available as content of data objects. Data objects are either created implicitly in their declaration as [named data objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennamed_data_object_glosry.htm "Glossary Entry") or explicitly as [anonymous data objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenanonymous_data_object_glosry.htm "Glossary Entry") using [CREATE DATA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcreate_data.htm) or the [instance operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninstance_operator_glosry.htm "Glossary Entry") [NEW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_new.htm).

-   The following are data objects that are not declared using keywords:
    -   [Literals](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenliteral.htm) are data objects that are declared in operand positions using literal source code.
    -   [Text symbols](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_symbols.htm) are character-like constant data objects that are declared outside the program.
-   Declaration of variables and constants in every context:
    -   [DATA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata.htm)
    -   [CONSTANTS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapconstants.htm)
-   Declaration of static attributes in classes:
    -   [CLASS-DATA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass-data.htm)
-   Declaration of static variables in procedures:
    -   [STATICS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapstatics.htm)
-   Declaration of interface work areas:
    -   [TABLES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptables.htm)
    -   [NODES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapnodes.htm) (obsolete)

Data objects can be declared by reference to a non-generic data type of the same ABAP program or from ABAP Dictionary. In this case, the data type determines the technical properties of the data object completely. A data object can also be constructed in the ABAP program without completely specified type definitions. The data type of a data object of this type is always complete, and does not exist independently, but rather as a property of the data object and is called a [bound data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbound_data_type_glosry.htm "Glossary Entry").

For more information about data objects, see [Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_objects.htm).

Continue
[Literals](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenliteral.htm)
[Text Symbols](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_symbols.htm)
[DATA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata.htm)
[CONSTANTS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapconstants.htm)
[STATICS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapstatics.htm)
[TABLES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptables.htm)