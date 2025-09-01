  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [Data Cluster](javascript:call_link\('abendata_cluster.htm'\)) →  [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: IMPORT, parameter_list, ABAPIMPORT_PARAMETERLIST, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0
D%0A%0D%0ASuggestion for improvement:)

IMPORT, parameter\_list

[Short Reference](javascript:call_link\('abapimport_shortref.htm'\))

Syntax

... *{*p1 = dobj1 p2 = dobj2 ...*}*
  *|* *{*p1 TO dobj1  p2 TO dobj2 ...*}*
  *|* (ptab) ...

Additions:

[1\. ... p1 = dobj1 p2 = dobj2 ...](#!ABAP_ADDITION_1@1@)
[2\. ... p1 TO dobj1 p2 TO dobj2 ...](#!ABAP_ADDITION_2@2@)
[3\. ... (ptab)](#!ABAP_ADDITION_3@3@)

Effect

A [data cluster](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") can be read statically using a parameter list in the form p1 = dobj1 p2 = dobj2 ... or p1 TO dobj1 p2 TO dobj2 ... and dynamically by specifying a parenthesized internal table ptab. Here the system searches the data cluster for data stored under the names p1, p2, .... If specified statically as b1, b2, ..., the system searches for the names in uppercase letters. If specified dynamically in rtab, the system searches for the names in the case used there.

If a parameter p1, p2, ... is specified that is not stored in the data cluster, the specification is ignored and the data object dobj retains its current value. By default, the data objects dobj must have the same data type as the parameter p1, p2, ... of the cluster. In internal tables, only the row type and not the table category is relevant. The following exceptions apply:

-   With data objects of the type c, different lengths are allowed. In this case, the appropriate conversion rule from the [conversion table for source field type c](javascript:call_link\('abenconversion_type_c.htm'\)) applies.
-   Data of type n can be imported into data objects of type c if they have the same length.
-   If the data types of all components of a structure, except for the last one, match and this component is of the type c, it can be lengthened or shortened in accordance with the conversion rule from the conversion table for source field type c. [Alignment gaps](javascript:call_link\('abenalignment_gap_glosry.htm'\) "Glossary Entry") in front of this component are considered part of the component.
-   In the case of structures, it is enough that the initial part of a target structure has the same type as the source structure in the data cluster. After this, the target structure can contain further components at the highest level. In imports, the surplus components are filled with their [initial values](javascript:call_link\('abeninitial_value_glosry.htm'\) "Glossary Entry"). A substructure of the target structure must not, however, have more components than the corresponding substructure in the source structure.
-   Data objects of the [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry") of an [enumerated object](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") stored in the cluster can be imported into an enumeration object if the imported value is a valid [enumerated value](javascript:call_link\('abenenumerated_value_glosry.htm'\) "Glossary Entry") of the [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry"). This includes any stored enumerated objects and regular elementary data objects of the basic type. Conversely, stored enumerated objects cannot be imported into data objects of their base type.

When structures are exported, the information indicating whether the structure contains components inherited using the statement [INCLUDE](javascript:call_link\('abapinclude_type.htm'\)) or inherited from other substructures in the ABAP Dictionary is stored. A structure into which data is imported must also match the structure in the data cluster with respect to the components applied using INCLUDE. Only for structures that were stored prior to Release 6.10 and structures where all the components of the uppermost hierarchy level were transferred using INCLUDE does the target structure not necessarily need to be set up with the same INCLUDE statements.

When importing from internal tables with non-unique [table keys](javascript:call_link\('abenitab_key.htm'\)), the order of duplicate rows in relation to these keys is not retained.

The additions specified under [conversion\_options](javascript:call_link\('abapimport_conversion.htm'\)) allow additional conversions and define other conversion rules. If structured data with character-like components is imported into [Unicode systems](javascript:call_link\('abenunicode_system_glosry.htm'\) "Glossary Entry"), and these components were exported in a [MDMP system](javascript:call_link\('abenmdmp-system_glosry.htm'\) "Glossary Entry") and vice versa, a special [text language rule](javascript:call_link\('abenimport_text_language.htm'\)) applies.

Hint

The rule that a target structure at the highest level may have more components than the source structure can cause problems in relation to structures defined in the ABAP Dictionary if the structure there is marked as enhanceable. Therefore, this situation raises a warning from the extended program check.

Addition 1   

... p1 = dobj1 p2 = dobj2 ...

Addition 2   

... p1 TO dobj1 p2 TO dobj2 ...

Effect

In the static case, the content is read from the data objects stored in the data cluster under the names p1, p2, ..., and these content is passed to the dobj data objects. The system searches for the names p1, p2, ... in uppercase letters in the data cluster. The specifications p1 = dobj1 p2 = dobj2 ... and p1 TO dobj1 p2 TO dobj2 ... have the same meaning. If a data object dobj is an internal table with a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"), the [table body](javascript:call_link\('abentable_body_glosry.htm'\) "Glossary Entry") is addressed instead of the header line.

Programming Guideline

[Use consistent spelling](javascript:call_link\('abenalternative_langu_guidl.htm'\) "Guideline")

Hints

-   The use of \= is recommended rather than TO, since \= is also used by other ABAP statements to inherit data.
-   In the static case, it is not possible to read any data objects with names containing lowercase letters. These names can be defined using the dynamic variant of the [parameter list](javascript:call_link\('abapexport_data_cluster_param.htm'\)) for statement EXPORT.
-   Outside of classes, and if the name does not contain an address specification such as an [instance component selector](javascript:call_link\('abeninstance_comp_selector_glosry.htm'\) "Glossary Entry") or an [offset/length specification](javascript:call_link\('abenoffset_length_specific_glosry.htm'\) "Glossary Entry"), the [obsolete short form](javascript:call_link\('abapexport_import_obsolete.htm'\)) dobj1 dobj2... can be used in the static variant. In this case, the parameters are searched for implicitly in the cluster under the name of the specified data object.

Example

Static import of data stored using the dynamic variant of the [parameter list](javascript:call_link\('abapexport_data_cluster_param.htm'\)) of the statement EXPORT. The data can be read with the static variant of the parameter list for the statement IMPORT, because the data names only contain uppercase characters.

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

-   To read data objects with the dynamic variant that were stored using the static variant of the [parameter list](javascript:call_link\('abapexport_data_cluster_param.htm'\)) of the statement EXPORT, the names of these data objects must be specified in uppercase letters. Any names containing lowercase letters can only be read and written with the dynamic variants.
-   Outside of classes, a single-column internal table for parameter\_list can also be used. This is the dynamic variant of the [obsolete short form](javascript:call_link\('abapexport_import_obsolete.htm'\)) used to search for the data objects stored in the data cluster under the names of the data objects specified in the table.

Example

Dynamic import of data stored using the static variant of the [parameter list](javascript:call_link\('abapexport_data_cluster_param.htm'\)) of the statement EXPORT. To read data with the dynamic variant of the parameter list of the statement IMPORT, the names must be specified in uppercase letters in the first column of ptab.

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