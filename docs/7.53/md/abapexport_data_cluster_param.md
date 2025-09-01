  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [Data Cluster](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_cluster.htm) →  [EXPORT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapexport_data_cluster.htm) → 

EXPORT - parameter\_list

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapexport_shortref.htm)

Syntax

... *{*p1 = dobj1 p2 = dobj2 ...*}*
  *|* *{*p1 FROM dobj1 p2 FROM dobj2 ...*}*
  *|* (ptab) ...

Extras:

[1\. ... p1 = dobj1 p2 = dobj2 ...](#!ABAP_ADDITION_1@1@)
[2\. ... p1 FROM dobj1 p2 FROM dobj2 ...](#!ABAP_ADDITION_2@2@)
[3\. ... (ptab)](#!ABAP_ADDITION_3@3@)

Effect

A [data cluster](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_cluster_glosry.htm "Glossary Entry") can be defined statically by a list in the form p1 = dobj1 p2 = dobj2 ... or p1 FROM dobj1  p2 FROM dobj2 ... and dynamically by specifying a parenthesized internal table ptab. Here the system searches for the data saved in the data cluster under the names p1, p2, ... and so on. The case of the names in the data clusters depends on how they are specified in the ABAP runtime environment. If specified statically (b1, b2, ...), uppercase is used; if specified dynamically in rtab, the case used there is used.

If the data cluster is too big for the memory, an exception is raised.

Addition 1

... p1 = dobj1 p2 = dobj2 ...

Addition 2

... p1 FROM dobj1 p2 FROM dobj2 ...

Effect

In static cases, the content of the data objects dobj is stored under the names p1, p2, ... in the cluster. The name of a parameter p1, p2, ... is transformed to uppercase and can have a maximum of 255 characters. If specified, p1 = dobj1 p2 = dobj2 ... and p1 FROM dobj1  p2 FROM dobj2 ... have the same meaning. All data types can be used except reference types for the data object dobj or data types that contain reference types as components. If a data object dobj is an internal table with a [header line](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenheader_line_glosry.htm "Glossary Entry"), not the header line, but the [table body](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_body_glosry.htm "Glossary Entry") is addressed. When an [enumerated object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenumerated_object_glosry.htm "Glossary Entry") is used, the enumerated value is flagged as an enumerated type and saved in the basic type.

Programming Guideline

[Alternative Language Constructs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenalternative_langu_guidl.htm "Guideline")

Notes

-   The use of \= is recommended rather than FROM, since \= is also used by other ABAP statements to pass data.
    
-   Objects referenced by reference variables can first be serialized using the statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transformation.htm) and then exported. In instances of classes, the class must implement the interface IF\_SERIALIZABLE\_OBJECT here.
    
-   Outside of classes, and if the name does not contain a specified addressing such as an [instance component selector](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninstance_comp_selector_glosry.htm "Glossary Entry") or an [offset/length specification](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoffset_length_specific_glosry.htm "Glossary Entry"), the [obsolete short form](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapexport_import_obsolete.htm) dobj1 dobj2... can be used in the static variant. Here, all data objects are implicitly stored under their name in the data cluster.
    

Example

Exports three numbers to a data cluster of the database table DEMO\_INDX\_BLOB and imports the same three numbers to the the components of a structure.

EXPORT num1 = 1 num2 = 2 num3 = 3
       TO DATABASE demo\_indx\_blob(nm) ID 'DEMO'.
...
DATA:
  BEGIN OF wa,
    num1 TYPE i,
    num2   TYPE i,
    num3 TYPE i,
  END OF wa.
IMPORT num1 = wa-num1 num2 = wa-num2 num3 = wa-num3
  FROM DATABASE demo\_indx\_blob(nm) ID 'DEMO'.
cl\_demo\_output=>display( wa ).

Addition 3

... (ptab)

Effect

In the dynamic case, the parameter list is specified in an index table ptab with two columns. These columns can have any name and have to be of the type "character". The first column in ptab must contain the names of the parameters, and the second must contain the data objects (not case-sensitive). The names of the data objects are used exactly as specified in the first column of ptab. If the second column is initial, the name of the parameter in the first column has to match the name of a data object. The data object is then stored under its name in the cluster. If the first column of ptab is initial, a non-handleable exception is raised.

Notes

-   Data objects whose names contain lowercase letters in the data cluster cannot be read using the static variant of the [specified parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapimport_parameterlist.htm) of the statement IMPORT.
    
-   Outside of classes, a single-column internal table for parameter\_list can also be used. This is the dynamic variant of the [obsolete short form](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapexport_import_obsolete.htm) used to save the data objects listed in the table to the data cluster (implicitly using their names).
    

Example

Exports data dynamically to a data cluster on the database table DEMO\_INDX\_BLOB. The names in the first column of ptab contain lowercase letters, which means that the data can only be imported by being specified dynamically. The second column, on the other hand, is not case-sensitive.

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
    num2   TYPE i,
    num3 TYPE i,
  END OF wa.
ptab = VALUE ptab(
  ( name = \`Num1\` dobj = \`wa-num1\` )
  ( name = \`Num2\` dobj = \`wa-num2\` )
  ( name = \`Num3\` dobj = \`wa-num3\` ) ).
IMPORT (ptab)
  FROM DATABASE demo\_indx\_blob(nm) ID 'DEMO'.
cl\_demo\_output=>display( wa ).