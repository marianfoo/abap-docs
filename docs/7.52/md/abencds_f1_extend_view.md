  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) → 

ABAP CDS - EXTEND VIEW

Syntax

[@AbapCatalog.sqlViewAppendName: 'CDS\_APPEND\_VIEW'](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_extend_view_annotations.htm)
*\[*[@extension\_annot1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_extend_view_annotations.htm)*\]*
*\[*[@extension\_annot2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_extend_view_annotations.htm)*\]*
...
EXTEND VIEW cds\_entity WITH cds\_view\_extension
            *\[*[association1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_association.htm) [association2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_association.htm) ...*\]*
            { select\_list\_extension }
            *\[*GROUP BY field1, field2, ...  *\]*
            *\[*UNION *\[*ALL*\]* { ... }*\]* *\[*;*\]*

Extras:

[1\. ... GROUP BY field1, field2, ...](#!ABAP_ADDITION_1@1@)
[2\. ... UNION *\[*ALL*\]* { ... }](#!ABAP_ADDITION_2@2@)

Effect

Extends an existing [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") cds\_entity using a [CDS view extension](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_extend_glosry.htm "Glossary Entry") cds\_view\_extension in the [CDS DDL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_ddl_glosry.htm "Glossary Entry"). The extended CDS view must be specified under the name of its [CDS entity](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry"). The name of the [CDS database view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_database_view_glosry.htm "Glossary Entry") cannot be specified here.

The elements of the annotation array [AbapCatalog.viewEnhancementCategory\[ \]](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm) must be specified accordingly using [DEFINE VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_view.htm) in its definition before the CDS view cds\_entity can be extended using the statement EXTEND VIEW:

-   By default (or if the value #PROJECTION\_LIST is specified), views can be extended without [aggregate expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_aggregate_functions.htm) in the SELECT list and without a [UNION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_union.htm) clause.

-   Alongside #PROJECTION\_LIST, the annotation array must contain the value #GROUP\_BY before views with [aggregate expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_aggregate_functions.htm) can be extended.

-   Alongside #PROJECTION\_LIST, the annotation array must contain the value #UNION before views with [UNION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_union.htm) clauses can be extended.

-   If the annotation array contains the value #NONE, the view cannot be extended.

CDS views with an explicit [name list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_name_list.htm) cannot currently be extended. CDS view extensions themselves cannot be extended.

EXTEND VIEW is used to make the following modification-free extensions:

-   The elements of the extension list select\_list\_extension specified after EXTEND VIEW are added to the existing SELECT list. At least one element must be added. It is possible to access all fields of the data sources used in the extended CDS view in the extension list select\_list\_extension. The list can have all [elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list_entry.htm) of a [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list.htm), except [aggregate expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_aggregate_functions.htm). The following can also be specified:

-   [Input parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter.htm) of the extended CDS view

-   [Path expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm) for various associations and for associations of the extended CDS view

-   Other [literals, expressions and functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_operands_and_expressions.htm)

If an appended element already occurs in the existing SELECT list or if a different extension occurs, it must be given an alternative element name using AS. An appended field cannot be defined as a key field using KEY.

-   The optional associations [association1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_association.htm), [association2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_association.htm), ... specified after EXTEND VIEW can be added to the existing SELECT statement.

If the original view contains [aggregate expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_aggregate_functions.htm), further aggregate expressions can be added to it in select\_list\_extension. If the original view does not contain any aggregate expressions, this is not possible. If other elements are added to a CDS view with aggregate expressions, its [GROUP-BY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_group_by.htm) clause must be extended accordingly using the addition GROUP BY of the association EXTEND VIEW

If the original view contains [UNION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_union.htm), equivalent UNION additions must be used in the statement EXTEND VIEW.

The annotation [AbapCatalog.sqlViewAppendName](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_extend_view_annotations.htm) must be specified before the view extension itself is defined using EXTEND VIEW. Further annotations [extension\_annot1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_extend_view_annotations.htm), [extension\_annot2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_extend_view_annotations.htm), ... can also be specified. This is optional.

Two ABAP Dictionary objects are created for a CDS view extension that is defined using EXTEND VIEW. A name must be specified for each of the two objects:

-   The actual name cds\_view\_extension of the CDS view extension is specified after the keywords EXTEND VIEW. This name follows the same rules as the name of an [append view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenappend_view_glosry.htm "Glossary Entry"), but can have up to 30 characters.

-   The name CDS\_APPEND\_VIEW for a classic [append view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenappend_view_glosry.htm "Glossary Entry") must be specified in quotation marks after the [annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_extend_view_annotations.htm) @AbapCatalog.sqlViewAppendName created when the CDS view extension was activated. This name is subject to the same rules as the name of a classic [view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_views.htm) in ABAP Dictionary. The new append view extends the [CDS database view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_database_view_glosry.htm "Glossary Entry") of the extended CDS view. The name given to the append view can no longer be changed after the CDS view is transported into a follow-on system.

[CDS view extensions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_extend_glosry.htm "Glossary Entry")are connected to [Switch Framework](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenswitch_framework_glosry.htm "Glossary Entry") whenever they are defined in a [package](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpackage_glosry.htm "Glossary Entry") that is assigned a [switch](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenswitch_german_glosry.htm "Glossary Entry").

Notes

-   Every CDS view extension has its own [DDL source code](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddl_source_code_glosry.htm "Glossary Entry"). The DDL source code in a CDS view extension is edited in a different editor from the DDL source code of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry"). The ADT documentation describes how these types of source code are created. DDL source code can also be displayed in [Repository Browser](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrepository_browser_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_workbench_glosry.htm "Glossary Entry").

-   An existing CDS view can be extended using multiple CDS view extensions.

-   The name of the new append view and of the actual CDS view extension should be located in the customer namespace (or in the namespace of a partner or special development) to protect it against being overwritten by upgrades or new releases.

-   Currently it is not possible to define extension categories for CDS views. The following restrictions apply for this reason:

-   CDS views have the property can be extended in any way with respect to the [extension category of structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_structures_enh_cat.htm). The consequences of this must be respected when extending a CDS view.

-   The attributes of a CDS view defined using [annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_view_entity_annotations.htm), such as switching on [table buffering](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_buffering_glosry.htm "Glossary Entry"), cannot currently be modified using extensions.

-   It is advisable to contact SAP before extending CDS views from basis packages.

-   The DDL source code of a CDS view extension does not need to have the same name as the CDS view extension entity, but it is advisable to use the name of the entity.

-   Once the DDL source code of a CDS view extension has been transported, the following relationships are committed and can no longer be changed:

-   The combination of the name of the source code and the names of the view extension defined there and its APPEND view. These can no can longer be modified by being renamed.

-   The assignment of the view extension to the extended view. The name cds\_entity after EXTEND VIEW can no longer be modified.

Example

The following CDS view extension

@AbapCatalog.sqlViewAppendName: 'DEMO\_CDS\_EXTENS'
extend view demo\_cds\_original\_view with demo\_cds\_view\_extension
{
spfli.distance,
spfli.distid as unit
};    

adds two view fields to the existing CDS view.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_ORIG'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@AbapCatalog.viewEnhancementCategory: \[#PROJECTION\_LIST\]
define view demo\_cds\_original\_view
as select from
spfli
join scarr on
scarr.carrid = spfli.carrid
{
key scarr.carrname as carrier,
key spfli.connid as flight,
spfli.cityfrom as departure,
spfli.cityto as destination
};    

The classic append view DEMO\_CDS\_EXTENS is created in ABAP Dictionary. The program DEMO\_CDS\_VIEW\_EXTENSION uses the statement [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) to access the enhanced view and also displays the components of the dictionary structures in question.

Addition 1

... GROUP BY field1, field2, ...

Effect

This addition must be specified if elements not defined using aggregate expressions are added to a view with [aggregate expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_aggregate_functions.htm). These elements must be specified after GROUP BY add extend the [GROUP-BY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_group_by.htm) clause of the original view. With respect to the extended view, the extended GROUP-BY clause must follow the general rules for a GROUP-BY clause.

The addition cannot be specified if the definition of the original view does not contain any aggregate expressions in its SELECT list.

Note

Extensions of a view with aggregate expressions require it to contain the annotation array viewEnhancementCategory\[ \] with the value #GROUP\_BY.

Example

The following CDS view extension

@AbapCatalog.sqlViewAppendName: 'DEMO\_CDS\_EXTAGG'
extend view demo\_cds\_aggregate with demo\_cds\_extend\_aggregate
{
connid,  
sum(distance) as sum\_distance
}
group by
connid;    

adds two view fields to the existing CDS view.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_AGG'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@AbapCatalog.viewEnhancementCategory: \[#PROJECTION\_LIST,#GROUP\_BY\]
define view demo\_cds\_aggregate
as select from
spfli  
{
carrid,
sum(fltime) as sum\_fltime
}
group by
carrid;    

A database field connid and an aggregate expression sum(distance) are added to the SELECT list. Accordingly, the addition GROUP BY must be used to add the database field to the GROUP-BY clause of the original view.

Addition 2

... UNION *\[*ALL*\]* { ... }

Effect

This addition must be specified when a view with [UNION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_union.htm) clauses is extended. A corresponding UNION addition must be specified for each UNION clause of the original view. The addition ALL must be specified each time it is specified in the associated UNION clause of the original view. The curly brackets can contain elements that extend the SELECT list of the associated UNION clause of the original view. As specified by the SELECT list extended using select\_list\_extension, the UNION clauses must be extended so that the rules for UNION clauses are not broken in the extended view.

The addition cannot be specified if the definition of the original view does not have a UNION clause.

Note

Extensions of a view with UNION clauses require it to contain the annotation array viewEnhancementCategory\[ \] with the value #UNION.

Example

The following CDS view extension

@AbapCatalog.sqlViewAppendName: 'DEMO\_CDS\_EXTUNI'
extend view demo\_cds\_union with demo\_cds\_extend\_union
{
c as c3,
d as c4
}
union
{
f as c3,
g as c4
}
union all
{
k as c3,
l as c4
};    

adds two view fields to the existing CDS view.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_UIO'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@AbapCatalog.viewEnhancementCategory: \[#PROJECTION\_LIST,#UNION\]
define view demo\_cds\_union
as select from
demo\_join1
{
a as c1,
b as c2
}
union select from
demo\_join2
{
d as c1,
e as c2
}
union all select from
demo\_join3
{
i as c1,
j as c2
};    

The original view has two UNION clauses represented using corresponding UNION additions in the definition of the CDS view extension. Two elements with matching types are added to the three SELECT lists of the original view.

Continue
[ABAP CDS - EXTEND VIEW, extension\_annot](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_extend_view_annotations.htm)