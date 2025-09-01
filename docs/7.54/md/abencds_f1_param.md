  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@parameter\_annot2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...
    pname : [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_typing.htm)
    *\[*[@<parameter\_annot1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    *\[*[@<parameter\_annot2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines a CDS parameter called pname in one of the following:

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_list.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_func_parameter_list.htm) of a [CDS table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_hiera_parameter_list.htm) of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

-   [Parameter list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_parameter_list.htm) of an [abstract CDS entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry")

The name pname must comply with the naming rules for [names](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_general_syntax_rules.htm). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list_association.htm) CDS associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_typing.htm).

A non-abstract CDS entity for which CDS parameters are defined as input parameters can be used as

-   A [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_data_source.htm) or in a [path expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_path_expression.htm) of a different CDS view

-   A [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) statement from ABAP SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_parameters.htm),

This list must be specified directly after the name of the view when using an entity with parameters (both within the CDS DDL in ABAP CDS and in ABAP SQL). In ABAP SQL, an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm) can be used, however, to make ABAP SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm) or after the parameter using [@parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm). The latter is possible only for [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry"), [CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry"), and [CDS hierarchies](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") and not for [abstract CDS entities](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm)