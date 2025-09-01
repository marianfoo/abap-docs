  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - Common DDL Elements](javascript:call_link\('abencds_ddl_common_elements.htm'\)) →  [CDS DDL - parameter](javascript:call_link\('abencds_f1_param.htm'\)) → 

CDS DDL - parameter\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...
... @<[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a parameter annotation in the definition of an [CDS parameter](javascript:call_link\('abencds_parameter_glosry.htm'\) "Glossary Entry") [parameter](javascript:call_link\('abencds_f1_param.htm'\)) in one of the following:

-   [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry")
-   [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")
-   [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")
-   [CDS custom entity](javascript:call_link\('abencds_custom_entity_glosry.htm'\) "Glossary Entry")
-   [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry")
-   [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry")

Parameter annotations can be specified before and after the parameter:

-   In front of the parameter, the character @ must be placed before the name annotation of the annotation.
-   After the parameter, the characters @< must be placed before the name annotation of the annotation.
    
    This notation is possible for all CDS entities listed above, except for CDS view entities. For CDS view entities, all annotations, including parameter annotations, are possible only in front of the element they refer to.
    

The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #PARAMETER.

The following tables show the possible [ABAP annotations](javascript:call_link\('abenabap_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime framework for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime framework but by other SAP frameworks instead.

-   [EndUserText Annotations](#abencds-f1-parameter-annotations-1-------environment-annotations---@ITOC@@ABENCDS_F1_PARAMETER_ANNOTATIONS_2)

The first column of the table shows the (possibly structured) name annotation of an ABAP annotation and the second column shows its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the default value which is used if the annotation is not used at all. The fifth column shows the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

EndUserText Annotations

Translatable texts of the parameter.

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

Hint

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry"). The value of such an annotation is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and it is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](javascript:call_link\('abensecondary_language_glosry.htm'\) "Glossary Entry") in AS ABAP is used.

Environment Annotations

Defines parameter passing from ABAP SQL to a CDS view.

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

not possible;
syntax error (CDS view entity) or exception (all other CDS entities)

An input parameter can be annotated strictly once with the annotation Environment.systemField. If the CDS entity is used as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement in [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"), this assignment has the following consequences:

-   No explicit actual parameter can be assigned in ABAP SQL to an input parameter to which the system field sy-mandt was assigned using #CLIENT. ABAP SQL always implicitly passes the ID of the current [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") in accordance with the nominal value of sy-mandt or from the clients specified using [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)). The obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) cannot be specified when a CDS entity of this type is accessed.
-   No explicit actual parameter needs to be assigned in ABAP SQL to an input parameter to which a system field other than sy-mandt is assigned using #SYSTEM\_.... If no explicit actual parameter is specified, ABAP SQL passes the nominal value of the assigned system field implicitly.
-   For ABAP CDS, this annotation has no effect. Each formal parameter requires an actual parameter and also [session variables](javascript:call_link\('abencds_session_variable_v2.htm'\)) must be specified explicitly.

Any other values for value are ignored and raise an exception. For CDS view entities, no value or a wrong value lead to a syntax error.

Hints

-   The annotation @Environment.systemField is ignored in parameter passing to the CDS entity in other CDS entities. Explicit actual parameters must be specified here, for example input parameters from the current entity or [session variables](javascript:call_link\('abencds_session_variable_v2.htm'\)).
-   The value #CLIENT of the annotation @Environment.systemField is particularly significant for [client-dependent CDS table functions](javascript:call_link\('abencds_func_client_handling.htm'\)). If an input parameter is annotated like this, it is given the current client ID implicitly by the ABAP SQL statement [SELECT](javascript:call_link\('abapselect.htm'\)) and can be used to restrict the result set in the platform-dependent implementation of the function. @Environment.systemField: #CLIENT cannot be specified in the case of [client-independent CDS table functions](javascript:call_link\('abencds_func_client_handling.htm'\)).

Example

The following CDS view entity connects all input parameters with ABAP system fields and the SELECT list consists only of the input parameters. The ABAP program DEMO\_CDS\_SYSTEM\_FIELDS accesses the CDS view entity, once with explicit and once with implicit parameter passing, and produces both results.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_SYSTEM\_FIELDS\_VE
  with parameters
    @Environment.systemField : #CLIENT
    p\_mandt : syst\_mandt,
    @Environment.systemField : #SYSTEM\_DATE
    p\_datum : syst\_datum,
    @Environment.systemField : #SYSTEM\_TIME
    p\_uzeit : syst\_uzeit,
    @Environment.systemField : #SYSTEM\_LANGUAGE
    p\_langu : syst\_langu,
    @Environment.systemField : #USER
    p\_uname : syst\_uname
  as select from
    demo\_expressions
    {
      $parameters.p\_mandt as client\_field,
      $parameters.p\_datum as datum,
      $parameters.p\_uzeit as uzeit,
      $parameters.p\_langu as langu,
      $parameters.p\_uname as uname
    }
    where
      id = '1';