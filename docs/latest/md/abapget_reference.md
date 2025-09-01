---
title: "GET REFERENCE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_reference_shortref.htm) Syntax GET REFERENCE OF dobj INTO dref. Effect This statement sets the reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreference_glosry.htm 'Glossary Entr
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_reference.htm"
abapFile: "abapget_reference.htm"
keywords: ["delete", "loop", "do", "if", "try", "catch", "class", "data", "types", "internal-table", "field-symbol", "abapget", "reference"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreference_assignments.htm) →  [Assigning Reference Variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenset_references.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20GET%20REFERENCE%2C%20ABAPGET_REFERENCE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

GET REFERENCE

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_reference_shortref.htm)

Syntax

GET REFERENCE OF dobj INTO dref.

Effect

This statement sets the [reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreference_glosry.htm "Glossary Entry") in the reference variable dref so that it points to the data object dobj. The following can be specified for dref:

-   An existing [data reference variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_reference_variable_glosry.htm "Glossary Entry"). The static type of the data reference variable must be more general than or the same as the data type dobj, according to the [assignment rules for reference variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_references.htm).
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_inline.htm) or [FINAL(var)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfinal_inline.htm). This declares a data reference variable whose static type is the data type of dobj. The data type of dobj must be known statically as a complete type or as the generic type data. Field symbols and formal parameters with other generic types, in particular any, are not possible.

The data object is specified directly and in accordance with the rules described in the section [Read Positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_objects_usage_reading.htm). If offsets/lengths ([+off(len)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoffset_length.htm)) are specified, the data type dobj here cannot be string or xstring.

Hints

-   In addition to the reference operator [REF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_ref.htm) and the addition [REFERENCE INTO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table_outdesc.htm), the statement GET REFERENCE is the only option for internal table statements to create [stack references](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstack_reference_glosry.htm "Glossary Entry"). Stack references can become invalid if the referenced data object is deleted.
-   When applied to data objects in the [heap](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenheap_glosry.htm "Glossary Entry") GET REFERENCE creates memory-retaining [heap references](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenheap_reference_glosry.htm "Glossary Entry").
-   The content of two reference variables filled with GET REFERENCE is only the same if the remaining administration information is the same, apart from the referenced data objects. For example, a reference that is obtained directly by specifying the data object is not the same as a reference that is obtained by specifying a field symbol if it has a different data type due to a [casting](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencast_casting_glosry.htm "Glossary Entry").
-   For an internal table with a [header line](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenheader_line_glosry.htm "Glossary Entry"), a data reference variable can only point to this or the [table body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_body_glosry.htm "Glossary Entry"). In the statement GET REFERENCE, the name of an internal table with a header line addresses the header line. To address the table body, \[\] must be appended to the name as usual. A dereferenced data reference to which a table body is assigned behaves in the same way in operand positions as a table without a header line.
-   If references are set using GET REFERENCE, permission to access the corresponding data object is only checked at the position of the statement. The references can then be passed on to any destination and can be used to access the associated data objects from any position using the references. To prevent access to private and read-only attributes using references outside classes, do not publish references to these attributes externally. A constant or read-only input parameter, however, can never be made modifiable by passing its reference.
-   The [reference operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreference_operator_glosry.htm "Glossary Entry") [REF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_ref.htm) works like the statement GET REFERENCE and can be used in [general expression positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry").
-   A data reference obtained using GET REFERENCE that references a data object in the [shared objects memory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshared_objects_memory_glosry.htm "Glossary Entry") can also be stored in a closed [area instance version](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarea_instance_version_glosry.htm "Glossary Entry"). The restrictions described for the addition [AREA HANDLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcreate_data_area_handle.htm) of the statement [CREATE DATA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcreate_data.htm) must be respected.

Example

Creation of data references to the individual characters of a data object text and storing them in an internal table. Direct dereferencing at an operand position is possible because the data reference is completely typed. After the output, an alternative implementation with an [iteration expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfor_conditional.htm) and the reference operator [REF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_ref.htm) is shown that has the same result.

TYPES c1 TYPE c LENGTH 1.
DATA: dref         TYPE REF TO c1,
      dref\_tab     LIKE TABLE OF dref WITH EMPTY KEY,
      dref\_tab\_new LIKE dref\_tab.
DATA: text TYPE c LENGTH 10 VALUE '0123456789',
      off  TYPE i.
DO 10 TIMES.
  off = sy-index - 1.
  GET REFERENCE OF text+off(1) INTO dref.
  APPEND dref TO dref\_tab.
ENDDO.
LOOP AT dref\_tab INTO dref.
  cl\_demo\_output=>write( |{ dref->\* }| ).
ENDLOOP.
cl\_demo\_output=>display( ).
dref\_tab\_new = VALUE #(
  FOR j = 0 UNTIL j > 9 ( REF #( text+j(1) ) ) ).
ASSERT dref\_tab\_new = dref\_tab.

[Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: The data object specified after INTO is not a reference variable.
    Runtime error: GET\_REF\_REFERENCE\_EXPECTED
-   Cause: GET REFERENCE is not allowed for a substring.
    Runtime error: ILLEGAL\_SUBSTRING\_PARAMETER