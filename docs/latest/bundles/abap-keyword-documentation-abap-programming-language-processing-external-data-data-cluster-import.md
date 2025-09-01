# ABAP - Keyword Documentation / ABAP - Programming Language / Processing External Data / Data Cluster / IMPORT

Included pages: 7


### abapimport_data_cluster.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [Data Cluster](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_cluster.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20IMPORT%2C%20ABAPIMPORT_DATA_CLUSTER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

IMPORT

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_shortref.htm)

Syntax

IMPORT [parameter\_list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_parameterlist.htm) FROM [medium](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_medium.htm) *\[*[conversion\_options](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_conversion.htm)*\]*.

Effect

Imports data objects specified in [parameter\_list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_parameterlist.htm) from a [data cluster](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_cluster_glosry.htm "Glossary Entry") stored in storage medium [medium](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_medium.htm) with statement [EXPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_data_cluster.htm). If necessary, the data is automatically converted to the current byte order (endian) and character format. The additions [conversion\_options](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_conversion.htm) can be used to make adaptations to the current platform.

System Fields

sy-subrc

Meaning

0

The specified data cluster was found and the content of the parameters in the data cluster was passed to the respective data objects. Nonexistent parameters were ignored.

4

The specified data cluster was not found.

If the internal addition [USING subr](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_internal.htm) is used, a different rule applies to sy-subrc.

Hint

See also [Classes for Data Clusters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_expimp.htm).

Example

Reading of a link table of the ABAP keyword documentation that is buffered in a data cluster of a database table into an internal table.

DATA:
  abapdocu\_temp\_id TYPE abapdocu\_temp-srtfd,
  abapdocu\_temp\_wa TYPE abapdocu\_temp,
  index\_tab        TYPE cl\_abap\_docu=>abap\_index\_tab.
abapdocu\_temp\_id =  'MAN\_INDEX.' && sy-langu.
IMPORT man\_index\_tab = index\_tab
       FROM DATABASE abapdocu\_temp(mx)
       ID   abapdocu\_temp\_id
       TO   abapdocu\_temp\_wa.
IF sy-subrc = 0.
  ...
ENDIF.

Continue
[IMPORT, parameter\_list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_parameterlist.htm)
[IMPORT, medium](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_medium.htm)
[IMPORT, conversion\_options](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_conversion.htm)
[IMPORT, Text Language Rule](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenimport_text_language.htm)
[IMPORT, Internal Additions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_internal.htm)
[Exceptions in IMPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrabax_import_from_database.htm)


### abapimport_parameterlist.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [Data Cluster](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_cluster.htm) →  [IMPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_data_cluster.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20IMPORT%2C%20parameter_list%2C%20ABAPIMPORT_PARAMETERLIST%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

IMPORT, parameter\_list

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_shortref.htm)

Syntax

... *{*p1 = dobj1 p2 = dobj2 ...*}*
  *|* *{*p1 TO dobj1  p2 TO dobj2 ...*}*
  *|* (ptab) ...

Additions:

[1\. ... p1 = dobj1 p2 = dobj2 ...](#!ABAP_ADDITION_1@1@)
[2\. ... p1 TO dobj1 p2 TO dobj2 ...](#!ABAP_ADDITION_2@2@)
[3\. ... (ptab)](#!ABAP_ADDITION_3@3@)

Effect

A [data cluster](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_cluster_glosry.htm "Glossary Entry") can be read statically using a parameter list in the form p1 = dobj1 p2 = dobj2 ... or p1 TO dobj1 p2 TO dobj2 ... and dynamically by specifying a parenthesized internal table ptab. Here the system searches the data cluster for data stored under the names p1, p2, .... If specified statically as b1, b2, ..., the system searches for the names in uppercase letters. If specified dynamically in rtab, the system searches for the names in the case used there.

If a parameter p1, p2, ... is specified that is not stored in the data cluster, the specification is ignored and the data object dobj retains its current value. By default, the data objects dobj must have the same data type as the parameter p1, p2, ... of the cluster. In internal tables, only the row type and not the table category is relevant. The following exceptions apply:

-   With data objects of the type c, different lengths are allowed. In this case, the appropriate conversion rule from the [conversion table for source field type c](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_c.htm) applies.
-   Data of type n can be imported into data objects of type c if they have the same length.
-   If the data types of all components of a structure, except for the last one, match and this component is of the type c, it can be lengthened or shortened in accordance with the conversion rule from the conversion table for source field type c. [Alignment gaps](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenalignment_gap_glosry.htm "Glossary Entry") in front of this component are considered part of the component.
-   In the case of structures, it is enough that the initial part of a target structure has the same type as the source structure in the data cluster. After this, the target structure can contain further components at the highest level. In imports, the surplus components are filled with their [initial values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninitial_value_glosry.htm "Glossary Entry"). A substructure of the target structure must not, however, have more components than the corresponding substructure in the source structure.
-   Data objects of the [base type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbase_type_glosry.htm "Glossary Entry") of an [enumerated object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenumerated_object_glosry.htm "Glossary Entry") stored in the cluster can be imported into an enumeration object if the imported value is a valid [enumerated value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenumerated_value_glosry.htm "Glossary Entry") of the [enumerated type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenum_type_glosry.htm "Glossary Entry"). This includes any stored enumerated objects and regular elementary data objects of the basic type. Conversely, stored enumerated objects cannot be imported into data objects of their base type.

When structures are exported, the information indicating whether the structure contains components inherited using the statement [INCLUDE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinclude_type.htm) or inherited from other substructures in the ABAP Dictionary is stored. A structure into which data is imported must also match the structure in the data cluster with respect to the components applied using INCLUDE. Only for structures that were stored prior to ABAP release 6.10 and structures where all the components of the uppermost hierarchy level were transferred using INCLUDE does the target structure not necessarily need to be set up with the same INCLUDE statements.

When importing from internal tables with non-unique [table keys](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_key.htm), the order of duplicate rows in relation to these keys is not retained.

The additions specified under [conversion\_options](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_conversion.htm) allow additional conversions and define other conversion rules. If structured data with character-like components is imported into [Unicode systems](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunicode_system_glosry.htm "Glossary Entry"), and these components were exported in a [MDMP system](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmdmp-system_glosry.htm "Glossary Entry") and vice versa, a special [text language rule](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenimport_text_language.htm) applies.

Hint

The rule that a target structure at the highest level may have more components than the source structure can cause problems in relation to structures defined in the ABAP Dictionary if the structure there is marked as enhanceable. Therefore, this situation raises a warning from the extended program check.

Addition 1   

... p1 = dobj1 p2 = dobj2 ...

Addition 2   

... p1 TO dobj1 p2 TO dobj2 ...

Effect

In the static case, the content is read from the data objects stored in the data cluster under the names p1, p2, ..., and these content is passed to the dobj data objects. The system searches for the names p1, p2, ... in uppercase letters in the data cluster. The specifications p1 = dobj1 p2 = dobj2 ... and p1 TO dobj1 p2 TO dobj2 ... have the same meaning. If a data object dobj is an internal table with a [header line](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenheader_line_glosry.htm "Glossary Entry"), the [table body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_body_glosry.htm "Glossary Entry") is addressed instead of the header line.

Programming Guideline

[Use consistent spelling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenalternative_langu_guidl.htm "Guideline")

Hints

-   The use of \= is recommended rather than TO, since \= is also used by other ABAP statements to inherit data.
-   In the static case, it is not possible to read any data objects with names containing lowercase letters. These names can be defined using the dynamic variant of the [parameter list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_data_cluster_param.htm) for statement EXPORT.
-   Outside of classes, and if the name does not contain an address specification such as an [instance component selector](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninstance_comp_selector_glosry.htm "Glossary Entry") or an [offset/length specification](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoffset_length_specific_glosry.htm "Glossary Entry"), the [obsolete short form](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_import_obsolete.htm) dobj1 dobj2... can be used in the static variant. In this case, the parameters are searched for implicitly in the cluster under the name of the specified data object.

Example

Static import of data stored using the dynamic variant of the [parameter list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_data_cluster_param.htm) of the statement EXPORT. The data can be read with the static variant of the parameter list for the statement IMPORT, because the data names only contain uppercase characters.

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
FINAL(ptab) = VALUE ptab(
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

In the dynamic case, the parameter list is inherited from the two-column internal table ptab, whose columns must be character-like. The first column in ptab must list the names of the parameters, and the second must list the data objects in any case. The system searches in the data cluster for the exact names and cases specified in the first column of ptab. If the second column is initial, the name of the parameter in the first column must match the name of a data object. Then the content found under this name is assigned to the corresponding data object. If the first column of ptab is initial or an object name occurs twice, an uncatchable exception is raised.

Hints

-   To read data objects with the dynamic variant that were stored using the static variant of the [parameter list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_data_cluster_param.htm) of the statement EXPORT, the names of these data objects must be specified in uppercase letters. Any names containing lowercase letters can only be read and written with the dynamic variants.
-   Outside of classes, a single-column internal table for parameter\_list can also be used. This is the dynamic variant of the [obsolete short form](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_import_obsolete.htm) used to search for the data objects stored in the data cluster under the names of the data objects specified in the table.

Example

Dynamic import of data stored using the static variant of the [parameter list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_data_cluster_param.htm) of the statement EXPORT. To read data with the dynamic variant of the parameter list of the statement IMPORT, the names must be specified in uppercase letters in the first column of ptab.

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
FINAL(ptab) = VALUE ptab(
  ( name = \`NUM1\` dobj = \`num1\` )
  ( name = \`NUM2\` dobj = \`num2\` )
  ( name = \`NUM3\` dobj = \`num3\` ) ).
IMPORT (ptab)
  FROM DATABASE demo\_indx\_blob(nm) ID 'DEMO'.
cl\_demo\_output=>display( |{ num1 }, { num2 }, { num3 }| ).


### abapimport_medium.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [Data Cluster](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_cluster.htm) →  [IMPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_data_cluster.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20IMPORT%2C%20medium%2C%20ABAPIMPORT_MEDIUM%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

IMPORT, medium

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_shortref.htm)

Syntax

... *{* DATA BUFFER xstr *}*
  *|* *{* INTERNAL TABLE itab *}*
  *|* *{* MEMORY ID id *}*
  *|* *{* DATABASE      dbtab(ar) *\[*TO wa*\]* *\[*CLIENT cl*\]* ID id *}*
  *|* *{* SHARED MEMORY dbtab(ar) *\[*TO wa*\]* *\[*CLIENT cl*\]* ID id *}*
  *|* *{* SHARED BUFFER dbtab(ar) *\[*TO wa*\]* *\[*CLIENT cl*\]* ID id *}* ...

Alternatives:

[1\. ... DATA BUFFER xstr](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... INTERNAL TABLE itab](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... MEMORY ID id](#!ABAP_ALTERNATIVE_3@3@)
[4\. ... DATABASE dbtab(ar) *\[*TO wa*\]* *\[*CLIENT cl*\]* ID id](#!ABAP_ALTERNATIVE_4@4@)
[5\. ... SHARED MEMORY dbtab(ar) *\[*TO wa*\]* *\[*CLIENT cl*\]* ID id](#!ABAP_ALTERNATIVE_5@5@)
[6\. ... SHARED BUFFER dbtab(ar) *\[*TO wa*\]* *\[*CLIENT cl*\]* ID id](#!ABAP_ALTERNATIVE_6@6@)

Effect

The [data cluster](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_cluster_glosry.htm "Glossary Entry") to be imported can be taken from an elementary data object xstr or an internal table itab, the [ABAP Memory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_memory_glosry.htm "Glossary Entry"), a database table dbtab, or a cross-program memory area (SHARED MEMORY or BUFFER specified).

Alternative 1   

... DATA BUFFER xstr

Effect

If DATA BUFFER is specified, the data cluster is taken from the elementary data object xstr, which must be of the type xstring. The data object must contain a data cluster that was created using the DATA BUFFER addition of the [EXPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_data_cluster_medium.htm) statement. Otherwise, a [runtime error](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrabax_import_from_database.htm) occurs. The data object must not be initial.

Example

See the example for the addition [DATA BUFFER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_data_cluster_medium.htm) of the statement EXPORT.

Alternative 2   

... INTERNAL TABLE itab

Effect

If INTERNAL TABLE is specified, the data cluster is taken from the internal table itab. The first column of itab must have the data type [s](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_numeric.htm) or [i](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_numeric.htm) and the second column must have the type [x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_byte.htm). The only table category allowed for itab are [standard tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_table_glosry.htm "Glossary Entry") without [secondary table keys](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"). The internal table must contain a data cluster created using the INTERNAL TABLE addition of the [EXPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_data_cluster_medium.htm) statement; otherwise, a [runtime error](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrabax_import_from_database.htm) occurs. The internal table must not be empty.

Example

See the example for the addition [INTERNAL TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_data_cluster_medium.htm) of the statement EXPORT.

Alternative 3   

... MEMORY ID id

Effect

If MEMORY is specified, the data cluster that was written to the [ABAP Memory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_memory_glosry.htm "Glossary Entry") under the ID specified in id by the statement [EXPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_data_cluster_medium.htm) is imported. id expects a [flat](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenflat_glosry.htm "Glossary Entry") [character-like data object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharlike_data_object_glosry.htm "Glossary Entry"). This object contains the ID of the data cluster, which is case-sensitive.

Hint

Outside of classes, an [obsolete short form](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_import_mem_id_obsolete.htm) exists, in which the addition ID can be omitted. This reads the data cluster stored using the statement [EXPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_data_cluster_medium.htm) without specifying an ID.

Example

See the example for the addition [MEMORY ID](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_data_cluster_medium.htm) of the statement EXPORT.

Alternative 4   

... DATABASE dbtab(ar) *\[*TO wa*\]* *\[*CLIENT cl*\]* ID id

Effect

If DATABASE is specified, the data cluster that was written to the [export/import table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexport_import_table_glosry.htm "Glossary Entry") dbtab in the area ar and under the ID specified in id using the statement [EXPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_data_cluster_medium.htm) is imported. The export/import table dbtab must be [structured](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexport_data_cluster_indx.htm) as described in the EXPORT statement. id expects a flat, character-like data object that contains the ID of the data cluster, which is case-sensitive. The two-character area ar must be specified directly.

After TO, a work area wa that has the same data type as the database table dbtab can be specified. When imported, the values of the database fields that are between the fields SRTF2 and CLUSTR are assigned to the components of wa with the same name. If the addition TO wa is not specified within classes, no data transport takes place in these components. If the addition TO wa is not specified outside of classes, but the statement [TABLES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptables.htm) is used to declare a [table work area](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_work_area_glosry.htm "Glossary Entry") for the export/import table dbtab, the values of these database fields are assigned to the components of the table work area dbtab with the same names during the import.

If the export/import table dbtab is client-dependent, a flat character-like field cl can be specified after the addition CLIENT. This field contains a [client ID](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_identifier_glosry.htm "Glossary Entry"). If the addition is not specified, the current client is used.

Hints

-   Since each client represents a self-contained unit, the addition CLIENT should not be used in application programs.
-   It is still possible to use a table work area implicitly outside of classes instead of using TO wa explicitly. This should be considered an [obsolete short form](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_import_tables_area.htm), however.
-   Only outside of classes can id still be replaced by the obsolete specification [obs\_id](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_obsolete_id.htm).
-   The statement IMPORT ... FROM DATABASE does not support [table buffering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_buffering_glosry.htm "Glossary Entry").

Example

Reading of the table exported under the name scarr\_tab and the ID SCARR into the area SC of the database table DEMO\_INDX\_BLOB (see the example for the addition [DATABASE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_data_cluster_medium.htm) of the statement EXPORT) into the internal table itab. Here, the freely selectable components are assigned to the structure wa.

DATA:
  wa   TYPE demo\_indx\_blob,
  itab TYPE table OF scarr with EMPTY KEY.
IMPORT scarr\_tab = itab
  FROM DATABASE demo\_indx\_blob(sc)
  TO  wa
  ID 'SCARR'.
cl\_demo\_output=>new(
)->write\_data( wa-timestamp
)->write\_data( wa-userid
)->display( itab ).

Alternative 5   

... SHARED MEMORY dbtab(ar) *\[*TO wa*\]* *\[*CLIENT cl*\]* ID id

Alternative 6   

... SHARED BUFFER dbtab(ar) *\[*TO wa*\]* *\[*CLIENT cl*\]* ID id

Effect

If SHARED MEMORY or SHARED BUFFER is specified, the data cluster is imported that was written to the relevant application buffer of the [shared memory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshared_memory_glosry.htm "Glossary Entry") using the statement [EXPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_data_cluster_medium.htm) in the area ar and using the ID specified in id. The system accesses a memory table of the application buffer whose row structure is defined by an export/import table dbtab. The [setup](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexport_data_cluster_indx.htm) of this table is described in the statement EXPORT. id expects a [flat](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenflat_glosry.htm "Glossary Entry") character-like data object that contains the ID of the data cluster. The two-character area ar must be specified directly.

For the optional specification of the work area wa and client cl, the same applies as to imports from a database table.

Hints

-   The length of the key fields of the export/import table defined between the columns [RELID](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexport_data_cluster_indx.htm) and [SRTF2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexport_data_cluster_indx.htm) must not exceed 59 or 62 characters, depending on whether a client column exists.
-   Instead of using data clusters in the shared memory, it is best to use [shared objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshared_objects_glosry.htm "Glossary Entry"). Shared objects make it possible to store objects with complex dependencies, can be processed like regular objects, and enable multiple users to access the shared memory without any copying effort.

Example

Reading of the table exported under the name scarr\_tab and the ID SCARR into the area SC of the cross-transaction application buffer (see the example for the addition [SHARED BUFFER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_data_cluster_medium.htm) of the statement EXPORT) into the internal table itab. Here, the freely selectable components are assigned to the structure wa.

DATA:
  wa   TYPE demo\_indx\_blob,
  itab TYPE table OF scarr with EMPTY KEY.
IMPORT scarr\_tab = itab
  FROM SHARED BUFFER demo\_indx\_blob(sc)
  TO  wa
  ID 'SCARR'.
cl\_demo\_output=>new(
)->write\_data( wa-timestamp
)->write\_data( wa-userid
)->display( itab ).


### abapimport_conversion.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [Data Cluster](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_cluster.htm) →  [IMPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_data_cluster.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20IMPORT%2C%20conversion_options%2C%20ABAPIMPORT_CONVERSION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

IMPORT, conversion\_options

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_shortref.htm)

Syntax

... *{* *{* *{* *{**\[*ACCEPTING PADDING*\]* *\[*ACCEPTING TRUNCATION*\]**}*
        *|* *\[*IGNORING STRUCTURE BOUNDARIES*\]* *}*
        *\[*IGNORING CONVERSION ERRORS *\[*REPLACEMENT CHARACTER rc*\]**\]* *}*
    *|* *\[*IN CHAR-TO-HEX MODE*\]* *}*
    *\[*CODE PAGE INTO cp*\]*
    *\[*ENDIAN INTO endian*\]*.

Additions:

[1\. ... ACCEPTING PADDING](#!ABAP_ADDITION_1@1@)
[2\. ... ACCEPTING TRUNCATION](#!ABAP_ADDITION_2@2@)
[3\. ... IGNORING STRUCTURE BOUNDARIES](#!ABAP_ADDITION_3@3@)
[4\. ... IGNORING CONVERSION ERRORS *\[*REPLACEMENT CHARACTER rc*\]*](#!ABAP_ADDITION_4@4@)
[5\. ... IN CHAR-TO-HEX MODE](#!ABAP_ADDITION_5@5@)
[6\. ... CODE PAGE INTO cp](#!ABAP_ADDITION_6@6@)
[7\. ... ENDIAN INTO endian](#!ABAP_ADDITION_7@7@)

Effect

These additions allow the reading of data stored in [data clusters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_cluster_glosry.htm "Glossary Entry") into non-type-compliant data objects and define associated conversion rules. The following table shows which of the additions may be used during imports from the various buffers. The column headers are abbreviations for the following storage locations: [DATA BUFFER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_medium.htm) (B), [MEMORY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_medium.htm) (M), [SHARED MEMORY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_medium.htm) (SM), [SHARED BUFFER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_medium.htm) (SB), [DATABASE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_medium.htm) (DB), and [INTERNAL TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_medium.htm) (IT).

Conversion Addition

B

M

IT

DB

SM

SB

ACCEPTING PADDING

+

+

+

+

+

+

ACCEPTING TRUNCATION

+

+

+

+

+

+

IGNORING STRUCTURE BOUNDARIES

+

+

+

+

+

+

IGNORING CONVERSION ERRORS

+

\-

+

+

\-

\-

REPLACEMENT CHARACTER rc

+

\-

+

+

\-

\-

IN CHAR-TO-HEX MODE

+

\-

+

+

\-

\-

CODE PAGE INTO cp

+

\-

+

+

\-

\-

ENDIAN INTO endian

+

\-

+

+

\-

\-

Addition 1   

... ACCEPTING PADDING

Effect

This addition extends the rules from [parameter\_list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_parameterlist.htm) for different data types of source field and target field dobj in the data clusters:

-   In addition to data objects of the type c, the target field can be longer than the source field for data objects of the type n, p, or x.
-   Source fields of the type
    -   b can be read into target fields of the types s, i, and int8
    -   s can be read into target fields of the type i and int8 (but negative numbers are handled incorrectly)
    -   i can be read into target fields of the type int8
-   Source fields of the type c can be exported to target fields of the type string and source fields of the type x can be exported to target fields of the type xstring.
-   The rules above also apply if the component involved is the last component of a source structure or target structure that is otherwise set up in the same way.
-   In a target structure, substructures can also have more components than the substructures of the source structure if the structure is otherwise set up in the same way. The surplus components are provided with type-dependent [initial values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninitial_value_glosry.htm "Glossary Entry").

Hint

The rule that substructures in a target structure can have more components than the source structure can cause problems in relation to structures defined in the ABAP Dictionary. This is the case if the structure there is marked as extendable. Therefore, this situation raises a warning from the extended program check.

Example

Without the addition ACCEPTING PADDING, the structure f1 in the data cluster could not be imported into the structure f2 since a substructure of f2 contains a surplus component.

DATA: BEGIN OF f1,
       col1 TYPE string,
       BEGIN OF sub,
         col2 TYPE decfloat16,
       END OF sub,
       col3 TYPE i,
      END OF f1.
DATA: BEGIN OF f2,
        col1 TYPE string,
        BEGIN OF sub,
          col2 TYPE decfloat16,
          col3 TYPE xstring,
        END OF sub,
        col4 TYPE i,
      END OF f2.
EXPORT para = f1 TO MEMORY ID 'HK'.
...
IMPORT para = f2 FROM MEMORY ID 'HK' ACCEPTING PADDING.

Addition 2   

... ACCEPTING TRUNCATION

Effect

This addition expands the rules from [parameter\_list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_parameterlist.htm) for different data types of source field in the data cluster and target field dobj in the data cluster. This means that, in the case of structures that otherwise have the same type, if the source structure at the highest level has more components than the target structure in the data cluster, the surplus components are cut off. A substructure of the source structure must not have more components than the corresponding substructure in the target structure.

Example

Without the addition ACCEPTING TRUNCATION, the structure f1 in the data cluster could not be imported into the structure f2 since f2 contains fewer components.

DATA: BEGIN OF f1,
        col1 TYPE string,
        BEGIN OF sub,
          col2 TYPE decfloat34,
        END OF sub,
        col3 TYPE i,
        col4 TYPE xstring,
      END OF f1.
DATA: BEGIN OF f2,
        col1 TYPE string,
        BEGIN OF sub,
          col2 TYPE decfloat34,
        END OF sub,
        col3 TYPE i,
      END OF f2.
EXPORT para = f1 TO MEMORY ID 'HK'.
...
IMPORT para = f2 FROM MEMORY ID 'HK' ACCEPTING TRUNCATION.

Addition 3   

... IGNORING STRUCTURE BOUNDARIES

Effect

This addition expands the rules from [parameter\_list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_parameterlist.htm) for different data types of source field in the data cluster and target field dobj in the data cluster. In structures, this produces an insignificantly different setup, with the differences resulting from substructures or from various applied components of other structures with the statement [INCLUDE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinclude_type.htm). The components of source and target structure are all considered on one level, regardless of the setup inherited from substructures or from components applied using INCLUDE. Any [alignment gaps](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenalignment_gap_glosry.htm "Glossary Entry") that have resulted from substructures are irrelevant.

The addition IGNORING STRUCTURE BOUNDARIES, however, restricts the rules from [parameter\_list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_parameterlist.htm) in such a way that once the substructures or inherited components in the target structure are resolved, a last component of type c cannot have a different length and the target structure cannot have any additional components. The addition cannot be used together with the additions ACCEPTING PADDING and ACCEPTING TRUNCATION.

Example

Without the addition IGNORING STRUCTURE BOUNDARIES, the structure f1 in the data cluster could not be imported into the structure f2 since f1 and f2 are set up differently from substructures.

DATA: BEGIN OF incl\_struc,
        cola TYPE string,
        colb TYPE i,
      END OF incl\_struc.
DATA: BEGIN OF f1.
        INCLUDE STRUCTURE incl\_struc.
DATA:   col1 TYPE string,
        BEGIN OF sub,
          col2 TYPE decfloat16,
          col3 TYPE decfloat34,
        END OF sub,
        col4 TYPE i,
      END OF f1.
DATA: BEGIN OF f2,
        cola TYPE string,
        colb TYPE i,
        col1 TYPE string,
        BEGIN OF sub,
          col2 TYPE decfloat16,
        END OF sub,
        col3 TYPE decfloat34,
        col4 TYPE i,
      END OF f2.
EXPORT para = f1 TO MEMORY ID 'HK'.
...
IMPORT para = f2 FROM MEMORY ID 'HK'
                 IGNORING STRUCTURE BOUNDARIES.

Addition 4   

... IGNORING CONVERSION ERRORS *\[*REPLACEMENT CHARACTER rc*\]*

Effect

This addition suppresses an exception of the class CX\_SY\_CONVERSION\_CODEPAGE, which is raised when a conversion to another [code page](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencodepage_glosry.htm "Glossary Entry") is carried out during the import, and a character does not exist in the target code page.

If the addition REPLACEMENT CHARACTER is specified, each non-convertible character is replaced during the conversion by the character in rc. rc expects a character-like data object containing a single character. If the addition is not specified, the character # is used as a replacement character.

The addition IGNORING CONVERSION ERRORS also suppresses the exception if the number of bytes of an imported character-like component increases during a conversion to another code page, and therefore does no longer fit into the target object. If the addition is specified, surplus characters are cut off on the right. If the addition is not specified, only superfluous blanks are cut off on the right without raising an exception.

Addition 5   

... IN CHAR-TO-HEX MODE

Effect

This addition specifies that data that is stored in the data cluster under the data type c is assigned to target fields of the type x. The content of the source fields is not converted to the code page of the target system and are left unconverted and passed to the target fields instead. A single source field or a structure component of the type c can be assigned to a single target field or to a structure component of the type x, which has the same length in bytes. The addition is ignored by target fields of the type c.

This addition cannot be used together with the previous conversion additions.

Hint

A program using this addition cannot be transported between systems where character representations require different numbers of bytes. This addition is designed only for temporary programs, enabling them to import byte strings that were stored incorrectly in fields of the type c and to store them again in a type-compliant way.

Example

See under Addition ENDIAN INTO.

Addition 6   

... CODE PAGE INTO cp

Effect

This addition assigns the ID of the code page of the exported data to the data object cp. This object must have a character-like data type. The ID of the code page is the content of the column CPCODEPAGE of the database table TCP00.

Hint

The code page can be used to process data objects imported using CHAR-TO-HEX MODE. Conversions between code pages can be performed using system classes described in the section [Classes for Conversion of External Data Formats](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_conv.htm).

Example

See under Addition ENDIAN INTO.

Addition 7   

... ENDIAN INTO endian

Effect

This addition assigns the ID of the byte order of the exported data to the data object ENDIAN, which must have the data type abap\_endian from the [type pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentype_pool_glosry.htm "Glossary Entry") ABAP. The ID for big endian is B and L for little endian.

Hint

The byte order can be used to process data objects imported using CHAR-TO-HEX MODE, since code pages in which a character takes up more than one byte can be dependent on the byte order.

Example

The target field f2-col2 contains, after the import, the unconverted, binary content of f1-col2. The code page and the byte order in which the data is stored is in cp and en. Normally, the data in such a case is exported and imported in different programs. This example only works in a system in which a character is displayed using two bytes, since f2-col2 is double the length of f1-col2.

DATA: BEGIN OF f1,
        col1 TYPE c LENGTH 10 VALUE '1234567890',
        col2 TYPE c LENGTH 10 VALUE '1234567890',
      END OF f1.
DATA: BEGIN OF f2,
        col1 TYPE c LENGTH 10,
        col2 TYPE x LENGTH 20,
      END OF f2.
DATA: cp TYPE string,
      en TYPE abap\_endian.
EXPORT para = f1 TO DATABASE demo\_indx\_blob(hk) ID 'HK'.
...
IMPORT para = f2 FROM DATABASE demo\_indx\_blob(hk) ID 'HK'
                 IN CHAR-TO-HEX MODE
                 CODE PAGE INTO cp
                 ENDIAN INTO en.


### abenimport_text_language.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [Data Cluster](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_cluster.htm) →  [IMPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_data_cluster.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20IMPORT%2C%20Text%20Language%20Rule%2C%20ABENIMPORT_TEXT_LANGUAGE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

IMPORT, Text Language Rule

The rule described in this section is relevant only in cases where structures defined in the ABAP Dictionary in a [Unicode system](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunicode_system_glosry.htm "Glossary Entry") are imported from the database and these same structures were exported in an [MDMP system](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmdmp-system_glosry.htm "Glossary Entry"), and vice versa.

Character-like data can be stored in an MDMP system encoded using different [code pages](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencodepage_glosry.htm "Glossary Entry"). The character set ID stored in [EXPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_data_cluster.htm) is therefore not sufficient. For this reason, the statement [IMPORT FROM DATABASE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_medium.htm) is used for evaluating the [text language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_language_glosry.htm "Glossary Entry") of database tables or structures defined in the ABAP Dictionary.

The following hierarchy applies to assignments of the text language to a structure:

1.  A component that is labeled as a text language in a substructure or table-like component with a structured row type is only valid for this substructure or internal table.
2.  A component labeled as a text language in a superordinate structure applies to this structure and to all other structures or table-like components nested in it, which do not have any components of their own that can be identified as a text language.
3.  If a component labeled as a text language is among the freely selectable components of the [export/import tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexport_import_table_glosry.htm "Glossary Entry") in which the data is stored, this determines the text language for all elementary fields, structures, and internal tables in the corresponding data cluster that do not have their own text language.

When importing from structures stored in the database, the text language determines the code page used to handle the character-like components of a structure as follows:

-   Importing MDMP data into a Unicode system
    
    The code page of the imported data is determined using the text language from the database tables TCP0C (table of [text environments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_environment_glosry.htm "Glossary Entry")) and TCP0D (localization of the database). If no text language component is available, the character set ID stored during export is used.
    
    This rule assumes that the Unicode system has resulted from the conversion of an MDMP system. In other cases, this may lead to conversion errors.
    
-   Importing Unicode data into a MDMP system
    
    The imported data is handled according to the assignment of languages to code pages defined in the MDMP system, depending on the text language. If no text language component is available, the current [text environment language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is used.
    

Hint

Structures and internal tables with a structured line type that is based on types defined in the ABAP program do not have a text language. The character set ID stored during export is always used for these.


### abapimport_internal.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [Data Cluster](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_cluster.htm) →  [IMPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_data_cluster.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20IMPORT%2C%20Internal%20Additions%2C%20ABAPIMPORT_INTERNAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

IMPORT, Internal Additions

These additions are for internal use only.
Do not use them in application programs.

Additions:

[1\. ... FROM LOGFILE ID key](#!ABAP_ADDITION_1@1@)
[2\. ... USING subr*\[*(prog)*\]*](#!ABAP_ADDITION_2@2@)

Addition 1   

... FROM LOGFILE ID key

Effect

Imports data objects from update data records. key expects the update key that was assigned by the system, with the sequential request number. If the specified update key does not exist in the database table VBDATA, the runtime error IMPORT\_UNEXPECTED\_END\_OF\_DATA occurs.

Addition 2   

... USING subr*\[*(prog)*\]*

Effect

This addition can be specified for [IMPORT FROM DATABASE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_medium.htm) if a table work area dbtab is declared for the relevant database table using [TABLES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptables.htm). The addition TO wa is not allowed. The data is not imported from the database table. Instead, the subroutine subr is called. In the subroutine, the first row of a data cluster must be provided in the table work area dbtab as it would be read from the database. The subroutine is then called automatically as often as required until a complete data cluster has been imported. The table work area dbtab must be filled accordingly in every call. If no correct data cluster is provided, the behavior is undefined, and exceptions may be raised. If the addition USING subr is used, the return code sy-subrc is set to the value 0 or 4. It is set to the value 4 if it has a value other than 0 when the subroutine is exited.

The subroutine must either be defined in the same program or in a program, prog, specified explicitly. Its name must be prefixed with the name of the database table dbtab. The subroutine must have a USING parameter of type any, which is currently not supplied.

Hints

-   TO INTERNAL TABLE is intended to be specified for external use instead of FROM DATABASE ... USING.
-   Specifying an external program prog is the same as the obsolete variant of [PERFORM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapperform_obsolete.htm).

Example

Export of a data cluster to an internal table instead of to a database table. After that, import from the internal table

TABLES demo\_indx\_table.
DATA demo\_indx\_tab TYPE TABLE OF demo\_indx\_table.
SELECT \*
       FROM sflight
       INTO TABLE @DATA(sflight\_tab).
EXPORT sflight\_tab TO DATABASE demo\_indx\_table(fl) ID 'FLIGHTS'
       USING demo\_indx\_table\_export.
...
demo\_indx\_table-srtf2 = 0.
IMPORT sflight\_tab FROM DATABASE demo\_indx\_table(fl) ID 'FLIGHTS'
       USING demo\_indx\_table\_import.
...
FORM demo\_indx\_table\_export USING foo.
  APPEND demo\_indx\_table TO demo\_indx\_tab.
ENDFORM.
FORM demo\_indx\_table\_import USING foo.
  demo\_indx\_table = demo\_indx\_tab\[ srtf2 = demo\_indx\_table-srtf2 \].
  demo\_indx\_table-srtf2 += 1.
ENDFORM.


### abenrabax_import_from_database.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [Data Cluster](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_cluster.htm) →  [IMPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_data_cluster.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Exceptions%20in%20IMPORT%2C%20ABENRABAX_IMPORT_FROM_DATABASE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Exceptions in IMPORT

Catchable Exceptions

CX\_SY\_CONVERSION\_CODEPAGE

-   Cause: Error in conversion.
    Runtime error: CONNE\_IMPORT\_CONVERSION\_ERROR

CX\_SY\_IMPORT\_MISMATCH\_ERROR

-   Cause: A component of a structured dataset has an incorrect decimal place.
    Runtime error: CONNE\_IMPORT\_WRONG\_COMP\_DECS
-   Cause: A component of a structured dataset has an incorrect length.
    Runtime error: CONNE\_IMPORT\_WRONG\_COMP\_LENG
-   Cause: A component of a structured type in the dataset has an incorrect type.
    Runtime error: CONNE\_IMPORT\_WRONG\_COMP\_TYPE
-   Cause: A field in the dataset has incorrect decimal places.
    Runtime error: CONNE\_IMPORT\_WRONG\_FIELD\_DECS
-   Cause: A field in the dataset has an incorrect length.
    Runtime error: CONNE\_IMPORT\_WRONG\_FIELD\_LENG
-   Cause: A field in the dataset has an incorrect type.
    Runtime error: CONNE\_IMPORT\_WRONG\_FIELD\_TYPE
-   Cause: Type conflict between simple and structured data types.
    Runtime error: CONNE\_IMPORT\_WRONG\_OBJECT\_TYPE
-   Cause: Type conflict between structured objects
    Runtime error: CONNE\_IMPORT\_WRONG\_STRUCTURE
-   Cause: Source object and target object have incompatible types.
    Runtime error: IMPORT\_ALIGNMENT\_MISMATCH
-   Cause: Dataset has a different length.
    Runtime error: IMPORT\_WRONG\_END\_POS

CX\_SY\_IMPORT\_FORMAT\_ERROR

-   Cause: Error in the data description of a stored data object.
    Runtime error: IMPORT\_FORMAT\_ERROR
-   Cause: Error in the data description.
    Runtime error: IMPORT\_DESCR\_ENDMARK\_MISSING
-   Cause: The dataset was destroyed. The data is distributed among several table entries, and at least one table entry is missing.
    Runtime error: IMPORT\_UNEXPECTED\_END\_OF\_DATA
-   Cause: Error in decompression.
    Runtime error: IMPORT\_DECOMPRESS\_FAILED
-   Cause: Invalid or missing data cluster in IMPORT FROM INTERNAL TABLE
    Runtime error: IMPORT\_CONTAINER\_MISSING
-   Cause: Empty internal table in IMPORT FROM INTERNAL TABLE
    Runtime error: IMPORT\_CONTAINER\_MISSING
-   Cause: Empty data object in IMPORT FROM DATA BUFFER
    Runtime error: IMPORT\_CONTAINER\_MISSING
-   Cause: The data cluster was destroyed.
    Runtime error: IMPORT\_OBJECT\_DESTROYED
-   Cause: Invalid or missing data cluster in IMPORT FROM DATA BUFFER
    Runtime error: CONNE\_CONTAINER\_TOO\_SHORT
-   Cause: The dataset was destroyed.
    Runtime error: CONNE\_ILLEGAL\_TRANSPORT\_HEADER
-   Cause: An attempt was made to import a dataset originating from an AS ABAP of a higher release level. This action is not supported.
    Runtime error: CONNE\_ILLEGAL\_TRANSPORT\_VERS
-   Cause: Error in data description in IMPORT.
    Runtime error: CONNE\_IMPORT\_ILL\_DESCRIPTION
-   Cause: One of the properties saved for the cluster is invalid.
    Runtime error: CONNE\_COMPRESS\_FLAG\_INVALID
    Runtime error: CONNE\_DESCRIPTION\_FLAG\_INVALID
    Runtime error: CONVERSION\_CODEPAGE\_UNKNOWN

CX\_SY\_EXPIMP\_DB\_SQL\_ERROR

-   Cause: SQL error in import from the database.
    Runtime error: [DBIF\_...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_exceptions.htm)

Uncatchable Exceptions

-   Cause: The object name in the cluster, that is, the content of the first column, is empty.
    Runtime error: DYN\_IMEX\_OBJ\_NAME\_EMPTY
-   Cause: An object name (in the cluster) occurs twice in the first column of the internal table.
    Runtime error: DYN\_IMEX\_OBJ\_NAME\_TWICE
-   Cause: The data object in the program, that is, the object whose name is in column 2 if this column is not empty, else in column 1, does not exist.
    Runtime error: DYN\_IMEX\_OBJ\_NOT\_FOUND
-   Cause: Error in import from the transactional application buffer
    Runtime error: IMPORT\_BUFFER\_FAILED
    Runtime error: IMPORT\_BUFFER\_EXTERNAL\_ERROR
    Runtime error: IMPORT\_BUFFER\_INTERNAL\_ERROR
    Runtime error: IMPORT\_BUFFER\_KEY\_NOT\_FOUND
