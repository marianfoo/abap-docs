---
title: "Syntax"
description: |
  ... p1 = dobj1 p2 = dobj2 ...  p1 FROM dobj1 p2 FROM dobj2 ...  (ptab) ... Additions: 1. ... p1 = dobj1 p2 = dobj2 ...(#!ABAP_ADDITION_1@1@) 2. ... p1 FROM dobj1 p2 FROM dobj2 ...(#!ABAP_ADDITION_2@2@) 3. ... (ptab)(#!ABAP_ADDITION_3@3@) Effect A data cluster(https://hel
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_data_cluster_param.htm"
abapFile: "abapexport_data_cluster_param.htm"
keywords: ["select", "do", "if", "case", "try", "catch", "class", "data", "types", "internal-table", "abapexport", "cluster", "param"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [Data Cluster](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_cluster.htm) →  [EXPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_data_cluster.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20EXPORT%2C%20parameter_list%2C%20ABAPEXPORT_DATA_CLUSTER_PARAM%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

EXPORT, parameter\_list

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_shortref.htm)

Syntax

... *{*p1 = dobj1 p2 = dobj2 ...*}*
  *|* *{*p1 FROM dobj1 p2 FROM dobj2 ...*}*
  *|* (ptab) ...

Additions:

[1\. ... p1 = dobj1 p2 = dobj2 ...](#!ABAP_ADDITION_1@1@)
[2\. ... p1 FROM dobj1 p2 FROM dobj2 ...](#!ABAP_ADDITION_2@2@)
[3\. ... (ptab)](#!ABAP_ADDITION_3@3@)

Effect

A [data cluster](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_cluster_glosry.htm "Glossary Entry") can be defined statically by a parameter list in the form p1 = dobj1 p2 = dobj2 ... or p1 FROM dobj1  p2 FROM dobj2 ... and dynamically by specifying a parenthesized internal table ptab. Here the system searches for the data stored in the data cluster under the names p1, p2, .... The case of the names in the data clusters depends on how they are specified in the ABAP runtime framework. If specified statically (b1, b2, ...), uppercase is used. If specified dynamically in rtab, the case used there is used.

If the data cluster is too big for the memory, an exception is raised.

Addition 1   

... p1 = dobj1 p2 = dobj2 ...

Addition 2   

... p1 FROM dobj1 p2 FROM dobj2 ...

Effect

In static cases, the content of the data objects dobj is stored under the names p1, p2, ... in the cluster. The name of a parameter p1, p2, ... is converted to uppercase letters and can have a maximum of 255 characters. The specifications p1 = dobj1 p2 = dobj2 ... and p1 FROM dobj1  p2 FROM dobj2 ... have the same meaning. All data types can be used for the data object dobj, except reference types or data types that contain reference types as components. If a data object dobj is an internal table with a [header line](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenheader_line_glosry.htm "Glossary Entry"), the [table body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_body_glosry.htm "Glossary Entry") is addressed instead of the header line. When an [enumerated object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenumerated_object_glosry.htm "Glossary Entry") is used, the enumerated value is flagged as an enumerated type and saved in the basic type.

Programming Guideline

[Alternative Language Constructs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenalternative_langu_guidl.htm "Guideline")

Hints

-   The use of \= is recommended rather than FROM, since \= is also used by other ABAP statements to pass data.
-   To export objects referenced by reference variables, these can first be serialized using the statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_transformation.htm) and then exported. In instances of classes, the class must implement the interface IF\_SERIALIZABLE\_OBJECT.
-   Outside of classes, and if the name does not contain a specified addressing such as an [instance component selector](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninstance_comp_selector_glosry.htm "Glossary Entry") or an [offset/length specification](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoffset_length_specific_glosry.htm "Glossary Entry"), the [obsolete short form](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_import_obsolete.htm) dobj1 dobj2... can be used in the static variant. Here, all data objects are implicitly stored under their name in the data cluster.

Example

Export of three numbers to a data cluster of the DDIC database table DEMO\_INDX\_BLOB and import of the same three numbers to the components of a structure.

EXPORT num1 = 1 num2 = 2 num3 = 3
       TO DATABASE demo\_indx\_blob(nm) ID 'DEMO'.
...
DATA:
  BEGIN OF wa,
    num1 TYPE i,
    num2 TYPE i,
    num3 TYPE i,
  END OF wa.
IMPORT num1 = wa-num1 num2 = wa-num2 num3 = wa-num3
  FROM DATABASE demo\_indx\_blob(nm) ID 'DEMO'.
cl\_demo\_output=>display( wa ).

Addition 3   

... (ptab)

Effect

In the dynamic case, the parameter list is specified in an index table ptab with two columns. These columns can have any name and must be of the type character. The first column in ptab must contain the names of the parameters, and the second must list the data objects in any case. The names of the data objects are used exactly as specified in the first column of ptab. If the second column is initial, the name of the parameter in the first column must match the name of a data object. The data object is then stored under its name in the cluster. If the first column of ptab is initial, an uncatchable exception is raised.

Hints

-   Data objects whose names contain lowercase letters in the data cluster cannot be read using the static variant of the [specified parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_parameterlist.htm) of the statement IMPORT.
-   Outside of classes, a single-column internal table for parameter\_list can also be used. This is the dynamic variant of the [obsolete short form](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_import_obsolete.htm) used to store the data objects listed in the table to the data cluster implicitly under their names.

Example

Dynamic export of data to a data cluster on the DDIC database table DEMO\_INDX\_BLOB. The names in the first column of ptab contain lowercase letters, which means that the data can only be imported by being specified dynamically. The second column, on the other hand, is not case-sensitive.

TYPES:
  BEGIN OF pline,
    name TYPE string,
    dobj TYPE string,
  END OF pline,
  ptab TYPE TABLE OF pline WITH EMPTY KEY.
DATA:
  num1 TYPE i VALUE 1,
  num2 TYPE i VALUE 2,
  num3 TYPE i VALUE 3.
DATA(ptab) = VALUE ptab(
  ( name = \`Num1\` dobj = \`NUM1\` )
  ( name = \`Num2\` dobj = \`NUM2\` )
  ( name = \`Num3\` dobj = \`NUM3\` ) ).
EXPORT (ptab)
       TO DATABASE demo\_indx\_blob(nm) ID 'DEMO'.
...
DATA:
  BEGIN OF wa,
    num1 TYPE i,
    num2 TYPE i,
    num3 TYPE i,
  END OF wa.
ptab = VALUE ptab(
  ( name = \`Num1\` dobj = \`wa-num1\` )
  ( name = \`Num2\` dobj = \`wa-num2\` )
  ( name = \`Num3\` dobj = \`wa-num3\` ) ).
IMPORT (ptab)
  FROM DATABASE demo\_indx\_blob(nm) ID 'DEMO'.
cl\_demo\_output=>display( wa ).