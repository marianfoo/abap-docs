  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, select\_list](javascript:call_link\('abencds_f1_select_list.htm'\)) →  [ABAP CDS - SELECT, element](javascript:call_link\('abencds_f1_select_list_entry.htm'\)) → 

ABAP CDS - SELECT, association

Syntax

... [path\_expr](javascript:call_link\('abencds_f1_path_expression.htm'\))

Effect

Uses a path expression [path\_expr](javascript:call_link\('abencds_f1_path_expression.htm'\)) to publish a [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") as an [element](javascript:call_link\('abencds_f1_select_list_entry.htm'\)) of the [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"). The path expression publishes its final CDS association for use in other CDS views or in ABAP SQL:

-   A different CDS view can evaluate the CDS association in its [path expressions](javascript:call_link\('abencds_f1_path_expression.htm'\)).

-   The CDS association can be used in ABAP SQL [path expressions](javascript:call_link\('abenopen_sql_path.htm'\)).

The current view is the source data source of the published CDS association and any join expressions created for a path expression from the CDS association use the current CDS view as their left side. All fields of the source data source of the CDS association that occur in the ON condition must also be specified as elements of the current SELECT list. If a path expression contains more than one CDS association, this type of element must be specified as a path expression closed by the field, with the same [attributes](javascript:call_link\('abencds_path_expression_attr.htm'\)) as the path expression used for publishing.

Like every element, a CDS association published in this way is part of the SELECT list and must also be specified in a [name list](javascript:call_link\('abencds_f1_name_list.htm'\)). It is not, however, part of the results set, a field of the [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry") of the CDS view, or a component of a type defined in ABAP with respect to the CDS view. If no alternative element name alias is defined, and there is no [name list](javascript:call_link\('abencds_f1_name_list.htm'\)), the element name is defined by the name of the CDS association named by the path expression.

Notes

-   When a CDS association is published, care should be taken that the publisher view itself is the source data source of the published CDS association and not the data source of the view. More specifically, when CDS associations are published that were already published by the data source of the current view, this view replaces the original view as the source data source of the CDS association. The left side of an instance of a join expression created for the published CDS association is the results set of the current view.

-   When a CDS association with a filter condition [cond\_expr](javascript:call_link\('abencds_path_expression_attr.htm'\)) is published, the SELECT list must define an alternative element name alias using AS.

-   When publishing a [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") using a path expression [path\_expr](javascript:call_link\('abencds_f1_path_expression.htm'\)) in the SELECT list, it is not possible to pass actual parameters to any [input parameters](javascript:call_link\('abencds_f1_parameter_list.htm'\)) of the target data source to assign start values to the input parameters.

-   That the names of the elements of a SELECT list have to be unique applies in particular also for the publication of a [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") using the path expression path\_expr. There must be not other element with this name. If necessary, AS must be used to define an alternative element name alias for the CDS association.

-   A CDS association can be published multiple times with various alternative element names. This allows you to use different filter conditions [cond\_expr](javascript:call_link\('abencds_path_expression_attr.htm'\)).

-   Special rules apply to the publication of CDS associations in SELECT statements joined with [UNION](javascript:call_link\('abencds_f1_union.htm'\)).

Example

The following CDS view opens its own CDS association \_spfli and the CDS association \_sflight published by its target data source demo\_cds\_assoc\_spfli. The fields of the source data source, which are used in the ON conditions of the CDS associations, are specified in the SELECT list. In the case of the CDS association published using \_spfli.\_sflight, path expressions \_spfli.carrid and \_spfli.connid must be used accordingly. The element scarr occurs twice, which means that an alternative element name must be defined using AS.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_PUBASC'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_publish\_assoc
as select from
scarr
association to demo\_cds\_assoc\_spfli as \_spfli on
scarr.carrid = \_spfli.carrid
{
\_spfli,
scarr.carrid as scarr\_carrid,
\_spfli.\_sflight,
\_spfli.carrid,
\_spfli.connid
}    

Executable Example

[Publishing CDS Associations](javascript:call_link\('abencds_publish_assocs_abexa.htm'\))

Continue
![Example](exa.gif "Example") [ABAP CDS - Publishing CDS Associations](javascript:call_link\('abencds_publish_assocs_abexa.htm'\))