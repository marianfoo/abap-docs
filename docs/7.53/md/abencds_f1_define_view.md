  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) → 

ABAP CDS - DEFINE VIEW

Syntax

*\[*[@entity\_annot1](javascript:call_link\('abencds_f1_entity_annotations.htm'\))*\]*
*\[*[@entity\_annot2](javascript:call_link\('abencds_f1_entity_annotations.htm'\))*\]*
...
[@AbapCatalog.sqlViewName: 'CDS\_DB\_VIEW'](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))
*\[*[@view\_annot1](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))*\]*
*\[*[@view\_annot2](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))*\]*
...
*\[*DEFINE*\]* VIEW cds\_entity
        *\[*[name\_list](javascript:call_link\('abencds_f1_name_list.htm'\))*\]*
        *\[*[parameter\_list](javascript:call_link\('abencds_f1_parameter_list.htm'\))*\]*
         AS [select\_statement](javascript:call_link\('abencds_f1_select_statement.htm'\)) *\[*;*\]*

Effect

Defines a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") in the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry"). A CDS view is implemented using a query [select\_statement](javascript:call_link\('abencds_f1_select_statement.htm'\)). The [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [AbapCatalog.sqlViewName](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)) must be specified before the view itself is defined using DEFINE VIEW. Further optional annotations [entity\_annot1](javascript:call_link\('abencds_f1_entity_annotations.htm'\)), ..., [view\_annot1](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)), ... can also be specified.

Two objects are created for a CDS view (of the [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry")) that is defined using DEFINE VIEW. A name must be specified for each of the two objects:

-   The name CDS\_DB\_VIEW of the [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry") must be specified in quotation marks after the [annotation](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)) @AbapCatalog.sqlViewName. This view is the technical foundation of the CDS view in ABAP Dictionary. The usual rules for ABAP Dictionary [views](javascript:call_link\('abenddic_views.htm'\)) apply to this name and it is not case-sensitive (it is transformed internally into uppercase letters). The associated SQL view is created under this name on the database. The name given to the database view can no longer be changed after the CDS view is transported into a follow-on system.

-   The name cds\_entity of the [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") is defined after the keywords DEFINE VIEW (DEFINE is optional). No quotation marks need to be specified. This name follows the rules of the CDS database view, but can have 30 characters. The CDS entity represents all properties of the CDS view.

Both names are in the namespace of the global [data types](javascript:call_link\('abenddic_data_types.htm'\)) in ABAP Dictionary and of the global [object types](javascript:call_link\('abenobject_type_glosry.htm'\) "Glossary Entry") in the [class library](javascript:call_link\('abenclass_library_glosry.htm'\) "Glossary Entry") and must each be unique. The name cds\_entity of the CDS entity can be used in other CDS DDL statements or in ABAP programs to access the CDS view.

The information specified in [name\_list](javascript:call_link\('abencds_f1_name_list.htm'\)) can be used to define the names of the elements of the view in a name list. [parameter\_list](javascript:call_link\('abencds_f1_parameter_list.htm'\)) can be used to assign input parameters to the view. These input parameters can be specified in operand positions of the view and can be assigned actual parameters when the view is used.

Notes

-   The [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry")of a CDS view defined using DEFINE VIEW can be displayed by entering the name CDS\_DB\_VIEW in the ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)) in ABAP Workbench. However the view cannot be edited here. Furthermore, this display does not provide all information. The [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") cds\_entity cannot be displayed here.

-   The [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry") CDS\_DB\_VIEW can also be accessed directly in the CDS DDL and in ABAP. It is strongly recommended, however, that only the [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") is used, since only this entity covers all properties of the CDS view. This makes the use of the CDS database view in ABAP SQL [obsolete](javascript:call_link\('abenopen_sql_cds_obsolete.htm'\)).

-   [ABAP annotations](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)) can be used to assign further technical and semantic attributes to a view in ABAP Dictionary. [Framework-specific annotations](javascript:call_link\('abencomponent_annotation_glosry.htm'\) "Glossary Entry") can be used to give the element specific semantic attributes for other SAP frameworks.

-   If a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") is defined for a CDS entity using the CDS-DCL statement [DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)), implicit [access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") applies by default when the CDS entity is accessed using ABAP SQL. CDS access control can be switched off using the value #NOT\_ALLOWED for the annotation [@AccessControl.authorizationCheck](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)) and using the addition [WITH PRIVILEGED ACCESS](javascript:call_link\('abapselect_data_source.htm'\)) in the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause of an ABAP SQL query.

-   If a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") is accessed using an ABAP SQL [SELECT](javascript:call_link\('abapselect.htm'\)) statement and the name cds\_entity, the syntax check is performed in [strict mode](javascript:call_link\('abenopensql_strict_mode_740_sp05.htm'\)), which handles the statement more strictly than the normal syntax check.

-   Every CDS view has its own [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry"). The DDL source code of a CDS view is edited in a different editor than the [DDLA source code](javascript:call_link\('abenddla_source_code_glosry.htm'\) "Glossary Entry") of an [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry"), the [DDLX source code](javascript:call_link\('abenddlx_source_code_glosry.htm'\) "Glossary Entry") of a [CDS metadata extension](javascript:call_link\('abencds_metadata_extension_glosry.htm'\) "Glossary Entry"), and the [DCL source code](javascript:call_link\('abendcl_source_code_glosry.htm'\) "Glossary Entry") of a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry"). The [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") documentation describes how the different types of source code are created. CDS source code can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").

-   The DDL source code of a CDS view does not need to have the same name as the CDS entity, but it is advisable to use this name.

-   After a piece of DDL source code is transported, the combination of its name and the name of the CDS view defined in it and its CDS database view is defined and can no longer be modified by being renamed.

-   The programming of CDS views using the DDL of the Core Data Services is one of the tasks included in the implementation of data models in ABAP Dictionary and is not usually the responsibility of regular ABAP application programmers. Once created, CDS views are used in ABAP programs using ABAP SQL read statements and must be stable enough to allow this.

Example

The following CDS view works in exactly the same way as the classic [projection view](javascript:call_link\('abenddic_projection_views.htm'\)) DEMO\_SPFLI. The program DEMO\_CDS\_PROJECTION uses SELECT to access the view. Unlike when the classic database view DEMO\_SPFLI is accessed, no client column is returned when the CDS entity DEMO\_CDS\_SPFLI is accessed. The CDS database view DEMO\_CDS\_PRJCTN returns the client column too.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_PRJCTN'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_spfli
as select from
spfli
{
key spfli.carrid,
key spfli.connid,
spfli.cityfrom,
spfli.cityto
}    

Continue
[ABAP CDS - DEFINE VIEW, view\_annot](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\))
[ABAP CDS - DEFINE VIEW, name\_list](javascript:call_link\('abencds_f1_name_list.htm'\))
[ABAP CDS - DEFINE VIEW, parameter\_list](javascript:call_link\('abencds_f1_parameter_list.htm'\))
[ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\))