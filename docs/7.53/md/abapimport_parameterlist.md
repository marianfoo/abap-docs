  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [Data Cluster](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_cluster.htm) →  [IMPORT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapimport_data_cluster.htm) → 

IMPORT - parameter\_list

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapimport_shortref.htm)

Syntax

... *{*p1 = dobj1 p2 = dobj2 ...*}*
  *|* *{*p1 TO dobj1  p2 TO dobj2 ...*}*
  *|* (ptab) ...

Extras:

[1\. ... p1 = dobj1 p2 = dobj2 ...](#!ABAP_ADDITION_1@1@)
[2\. ... p1 TO dobj1 p2 TO dobj2 ...](#!ABAP_ADDITION_2@2@)
[3\. ... (ptab)](#!ABAP_ADDITION_3@3@)

Effect

A [data cluster](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_cluster_glosry.htm "Glossary Entry") can be read statically by a list in the form p1 = dobj1 p2 = dobj2 ... or p1 TO dobj1 p2 TO dobj2 ... and dynamically by specifying a parenthesized internal table ptab. Here the system searches for the data clusters saved under the names p1, p2, ... and so on. If specified statically (b1, b2, ...), the system searches for the names written in uppercase; if specified dynamically in rtab, the system searches for the case (uppercase or lowercase) used there.

If a parameter p1, p2, ... is specified and it is not saved in the data cluster, it is ignored and the data object dobj retains its current value. The data objects dobj must have the same data type as the parameter p1, p2, ... of the cluster, in the standard version. With internal tables, only the row type and not the table type is relevant. The following exceptions apply:

-   With data objects of the type c, different lengths are allowed. Then the appropriate conversion rule from the [conversion table for source field type c](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_type_c.htm) applies.
    
-   In the case of structures, if the data types of all components (except for the last one) match and this component is of the type c, it can be lengthened or shortened in accordance with the conversion rule from the conversion table for source field type c. [Alignment gaps](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenalignment_gap_glosry.htm "Glossary Entry") in front of this component are considered part of the component.
    
-   If the structures otherwise have the same type and the target structure at the highest level has more components than the source structure in the data cluster, the surplus components are supplied with type-dependent [initial values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninitial_value_glosry.htm "Glossary Entry"). A substructure of the target structure must not have more components than the respective substructure in the source structure.
    
-   In an [enumerated object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenumerated_object_glosry.htm "Glossary Entry"), the data objects saved in the cluster of the [basic type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbase_type_glosry.htm "Glossary Entry") of the enumeration object, whose value is a valid [enumerated value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenumerated_value_glosry.htm "Glossary Entry") of an [enumerated type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenumerated_type_glosry.htm "Glossary Entry"). This includes any saved enumerated objects and normal elementary data objects of the basic type. However, saved enumerated objects cannot be imported into data objects of their basic type.
    

When structures are exported, information indicating whether the structure contains components inherited using the statement [INCLUDE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinclude_type.htm) or applied in ABAP Dictionary from other structures. A structure into which data is imported must also match the structure in the data cluster with respect to the components applied using INCLUDE. Only for structures saved prior to Release 6.10 and structures where all the components of the uppermost hierarchy level were applied using INCLUDE does the target structure not necessarily need to be set up with the identical INCLUDE statements.

When importing from internal tables with non-unique [table keys](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab_key.htm), the order of duplicate rows in relation to these keys is not retained.

The additions specified under [conversion\_options](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapimport_conversion.htm) allow additional conversions and define other conversion rules. If structured data with same-type components are imported into [Unicode systems](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunicode_system_glosry.htm "Glossary Entry"), and these components were exported in a [MDMP system](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmdmp-system_glosry.htm "Glossary Entry") and vice versa, a special [text language rule](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenimport_text_language.htm) applies.

Note

The rule that a target structure at the highest level may have more components than the source structure can cause problems in relation to structures defined in ABAP Dictionary if the structure there is marked as enhanceable. Therefore, this situation triggers a warning message in the enhanced program check.

Addition 1

... p1 = dobj1 p2 = dobj2 ...

Addition 2

... p1 TO dobj1 p2 TO dobj2 ...

Effect

In the static case, the contents are read from the data objects saved in the data cluster under the names p1, p2, ..., and these contents are passed to the dobj data objects. The system searches for the names p1, p2, ... (written in uppercase) in the data cluster. When specified, p1 = dobj1 p2 = dobj2 ... and p1 TO dobj1 p2 TO dobj2 ... are the same. If a data object dobj is an internal table with a [header line](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenheader_line_glosry.htm "Glossary Entry"), not the header line, but the [table body](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_body_glosry.htm "Glossary Entry") is addressed.

Programming Guideline

[Use consistent spelling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenalternative_langu_guidl.htm "Guideline")

Notes

-   The use of \= is recommended rather than TO, since \= is also used by other ABAP statements to inherit data.
    
-   In the static case, it is not possible to read any data objects with names containing lowercase characters. These names can be defined by using the dynamic variant of the [parameter list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapexport_data_cluster_param.htm) for statement EXPORT.
    
-   Outside of classes, and if the name does not contain a specified addressing such as an [instance component selector](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninstance_comp_selector_glosry.htm "Glossary Entry") or an [offset/length specification](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoffset_length_specific_glosry.htm "Glossary Entry"), the [obsolete short form](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapexport_import_obsolete.htm) dobj1 dobj2... can be used in the static variant. In this case, the parameters are searched for implicitly in the cluster under the name of the specified data object.
    

Example

Static import of data saved using the dynamic variant of the [parameter list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapexport_data_cluster_param.htm) of the statement EXPORT. The data can be read with the static variant of the parameter list for the statement IMPORT, because the data names only contain uppercase characters.

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
  ( name = \`NUM1\` dobj = \`num1\` )
  ( name = \`NUM2\` dobj = \`num2\` )
  ( name = \`NUM3\` dobj = \`num3\` ) ).
EXPORT (ptab)
       TO DATABASE demo\_indx\_blob(nm) ID 'DEMO'.
...
IMPORT num1 = num1 num2 = num2 num3 = num3
  FROM DATABASE demo\_indx\_blob(nm) ID 'DEMO'.
cl\_demo\_output=>display( |{ num1 }, { num2 }, { num3 }| ).

Addition 3

... (ptab)

Effect

In the dynamic case, the parameter list is inherited from the two-column internal table ptab, whose columns must be character-like. The first column in ptab must contain the names of the parameters, and the second must contain the data objects (not case-sensitive). The system searches in the data cluster for the exact names (case-sensitive) specified in the first column of ptab. If the second column is initial, the name of the parameter in the first column has to match the name of a data object. Then the content found under this name is assigned to the corresponding data object. If the first column of ptab is initial or an object name occurs twice, an exception that cannot be handled is raised.

Notes

-   To read data objects with the dynamic variant that were saved using the static variant of the [parameter list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapexport_data_cluster_param.htm) of the statement EXPORT, the names of these data objects must be specified in uppercase characters. Any names containing lowercase letters can only be read and written with the dynamic variants.
    
-   Outside of classes, a single-column internal table for parameter\_list can also be used. This is the dynamic variant of the [obsolete short form](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapexport_import_obsolete.htm) used to search for the data objects saved in the data cluster (under the names of the data objects specified in the table).
    

Example

Dynamic import of data saved using the static variant of the [parameter list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapexport_data_cluster_param.htm) of the statement EXPORT. To read data with the dynamic variant of the parameter list of the statement IMPORT, the names must be specified in uppercase letters in the first column of ptab.

DATA:
  num1 TYPE i VALUE 1,
  num2 TYPE i VALUE 2,
  num3 TYPE i VALUE 3.
EXPORT num1 = num1 num2 = num2 num3 = num3
       TO DATABASE demo\_indx\_blob(nm) ID 'DEMO'.
...
TYPES:
  BEGIN OF pline,
    name TYPE string,
    dobj TYPE string,
  END OF pline,
  ptab TYPE TABLE OF pline WITH EMPTY KEY.
DATA(ptab) = VALUE ptab(
  ( name = \`NUM1\` dobj = \`num1\` )
  ( name = \`NUM2\` dobj = \`num2\` )
  ( name = \`NUM3\` dobj = \`num3\` ) ).
IMPORT (ptab)
  FROM DATABASE demo\_indx\_blob(nm) ID 'DEMO'.
cl\_demo\_output=>display( |{ num1 }, { num2 }, { num3 }| ).