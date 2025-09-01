# ABAP Keyword Documentation / ABAP - Dictionary / ABAP CDS in ABAP Dictionary / ABAP CDS - Data Definitions / ABAP CDS - DDL for Data Definitions / ABAP CDS - parameter

Included pages: 2


### abencds_f1_param.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) → 

ABAP CDS - parameter

Syntax

... *\[*[@parameter\_annot1](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    *\[*[@parameter\_annot2](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    ...
    pname : [typing](javascript:call_link\('abencds_typing.htm'\))
    *\[*[@<parameter\_annot1](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    *\[*[@<parameter\_annot2](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))*\]*
    ...

Addition:

[... @parameter\_annot ... @<parameter\_annot](#!ABAP_ONE_ADD@1@)

Effect

Defines a CDS parameter called pname in one of the following:

-   [Parameter list](javascript:call_link\('abencds_f1_parameter_list.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_func_parameter_list.htm'\)) of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [Parameter list](javascript:call_link\('abencds_f1_entity_parameter_list.htm'\)) of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

The name pname must comply with the naming rules for [names](javascript:call_link\('abencds_general_syntax_rules.htm'\)). Furthermore, pname cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The name pname must be unique and be located in the namespace of the elements and [published](javascript:call_link\('abencds_f1_select_list_association.htm'\)) associations of the current CDS entity. Also, the reserved name connection cannot be used in table functions. The reserved names that cannot be used are specified in the database table TRESE. They are not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted. Each parameter must be typed with an elementary data type [typing](javascript:call_link\('abencds_typing.htm'\)).

A non-abstract CDS entity for which CDS parameters are defined as input parameters can be used as

-   A [data source](javascript:call_link\('abencds_f1_data_source.htm'\)) or in a [path expression](javascript:call_link\('abencds_f1_path_expression.htm'\)) of a different CDS view

-   A [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement from ABAP SQL in ABAP

In these cases, each input parameter must be assigned a suitable actual parameter whose value is then used in the operand positions in which the parameter is specified. The actual parameters are assigned using a parenthesized comma-separated list as follows:

[... cds\_entity( pname1 : act1, pname2 : act2, ...) ...](javascript:call_link\('abencds_f1_select_parameters.htm'\)),

This list must be specified directly after the name of the view when using an entity with parameters (both within the CDS DDL in ABAP CDS and in ABAP SQL). In ABAP SQL, an equals sign (\=) is used instead of a colon (:).

Note

It is not currently possible to define optional input parameters or replacement parameters for input parameters. The annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) can be used, however, to make ABAP SQL pass ABAP system fields to an input parameter implicitly.

Addition

... @parameter\_annot ... @<parameter\_annot

Effect

Specifies annotations for the parameter. The annotations can be specified before the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) or after the parameter using [@parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)). The latter is possibly only for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") and [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") and not for [abstract CDS entities](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry").

Continue
[ABAP CDS - parameter\_annot](javascript:call_link\('abencds_f1_parameter_annotations.htm'\))


### abencds_f1_parameter_annotations.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - parameter](javascript:call_link\('abencds_f1_param.htm'\)) → 

ABAP CDS - parameter\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...
... @<[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a parameter annotation in the definition of an [CDS parameter](javascript:call_link\('abencds_parameter_glosry.htm'\) "Glossary Entry") [parameter](javascript:call_link\('abencds_f1_param.htm'\)) of

-   A [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   A [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [An abstract CSD entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

Parameter annotations can be specified before and after the parameter: The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #PARAMETER.

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.

-   Following the parameter, the characters @< must be placed before the name annotation of the annotation.

The following tables show the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#@@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_1)

-   [Environment Annotations](#@@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter..

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the parameter

Character string with maximum 60 characters

\-

\-

EndUserText.quickInfo

Translatable tooltip of the parameter

String

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](javascript:call_link\('abensecondary_language_glosry.htm'\) "Glossary Entry") in AS ABAP is used.

Environment Annotations

Defines parameter passing to a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.systemField

Assigns an [ABAP system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") to the input parameter for implicit parameter passing in ABAP SQL.

#CLIENT:
[sy-mandt](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_DATE:
[sy-datum](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_TIME:
[sy-uzeit](javascript:call_link\('abensystem_fields.htm'\))
#SYSTEM\_LANGUAGE:
[sy-langu](javascript:call_link\('abensystem_fields.htm'\))
#USER:
[sy-uname](javascript:call_link\('abensystem_fields.htm'\))

\-

\-

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement in [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always passes (implicitly) the ID of the current [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)). The addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)) cannot be specified when a CDS entity of this type is accessed.

-   An explicit actual parameter does not need to be be assigned to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.

Any other values for value are ignored using an exception. Instead of the value #USER, the value #APPLICATION\_USER can be specified too. This is, however, only offered for reasons of downward compatibility.

Notes

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or even [session variables](javascript:call_link\('abencds_f1_session_variable.htm'\)).

-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-specific CDS table functions](javascript:call_link\('abencds_func_client_handling.htm'\)). If an input parameter is annotated accordingly, it is given the current client ID implicitly by the ABAP SQL statement [SELECT](javascript:call_link\('abapselect.htm'\)) and can be used to restrict the results set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [cross-client CDS table functions](javascript:call_link\('abencds_func_client_handling.htm'\)).

Example

The following CDS view associates all input parameters with ABAP system fields and the SELECT list consists only of the input parameters. The ABAP program DEMO\_CDS\_SYSTEM\_FIELDS accesses the CDS view by specifying parameters in full implicitly and explicitly and produces both results.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SYST'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_system\_fields
with parameters
@Environment.systemField : #CLIENT
p\_mandt : syst\_mandt,
@Environment.systemField : #SYSTEM\_DATE
p\_datum : syst\_datum,
@Environment.systemField : #SYSTEM\_TIME
p\_uzeit : syst\_uzeit,
p\_langu : syst\_langu @<Environment.systemField : #SYSTEM\_LANGUAGE,
p\_uname : syst\_uname @<Environment.systemField : #USER
as select from
demo\_expressions
{
:p\_mandt as client,
:p\_datum as datum,
:p\_uzeit as uzeit,
:p\_langu as langu,
:p\_uname as uname
}
where
id = '1';
