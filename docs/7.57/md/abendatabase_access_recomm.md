  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP-Managed Database Objects](javascript:call_link\('abenabap_managed_db_objects.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Rules for Accessing ABAP-Managed Database Objects, ABENDATABASE_ACCESS_RECOMM, 757%0D
%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Rules for Accessing ABAP-Managed Database Objects

The preceding sections

-   show an [overview of ABAP-managed database objects](javascript:call_link\('abenabap_managed_db_objects_oview.htm'\))
-   summarize [how ABAP-managed database objects are accessed](javascript:call_link\('abenabap_managed_db_objects_access.htm'\)).

The following rules for accessing ABAP-managed database objects are based on these two points.

-   [Basic Rule](#@@ITOC@@ABENDATABASE_ACCESS_RECOMM_1)
-   [Rules for Valid Use](#@@ITOC@@ABENDATABASE_ACCESS_RECOMM_2)
    -   [ABAP SQL](#@@ITOC@@ABENDATABASE_ACCESS_RECOMM_3)
    -   [AMDP](#@@ITOC@@ABENDATABASE_ACCESS_RECOMM_4)
    -   [ABAP-Managed Native SQL](#@@ITOC@@ABENDATABASE_ACCESS_RECOMM_5)
    -   [Mixed Access](#@@ITOC@@ABENDATABASE_ACCESS_RECOMM_6)

Basic Rule   

ABAP-managed database objects are only intended only for use by ABAP programs in AS ABAP and for access using its [database interface](javascript:call_link\('abendatabase_interface_glosry.htm'\) "Glossary Entry").

The way in which instances of ABAP-managed database objects are managed is the sole responsibility of AS ABAP. The actual implementation can change in incompatible ways when the release is upgraded. When using [non-ABAP managed Native SQL](javascript:call_link\('abenabap_managed_db_objects_nsql.htm'\)) to access objects, the same restrictions apply as when using [ABAP-managed Native SQL](javascript:call_link\('abenabap_managed_db_objects_nsql.htm'\)) (see below) and there is no intermediate layer in the form of a [Native SQL interface](javascript:call_link\('abennative_sql_interface_glosry.htm'\) "Glossary Entry") that could catch any changes. For example, it is not even possible to guarantee the names of the ABAP-managed database objects, such as [CDS-managed DDIC views (obsolete)](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry"), [AMDP procedures](javascript:call_link\('abenamdp_procedure_glosry.htm'\) "Glossary Entry"), or [AMDP functions](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry"). Accesses, such as using a [CDS-managed DDIC view (obsolete)](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") as a data source of a [SAP HANA view](javascript:call_link\('abenhana_view_glosry.htm'\) "Glossary Entry") or calling an [AMDP function](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry") in a non-ABAP managed database procedure can become invalid at any time. Furthermore, the [ABAP-specific session variables](javascript:call_link\('abenhana_session_variables_abexa.htm'\)) in the SAP HANA database, which can modify the way ABAP-managed database objects work, are not set and where-used lists using ABAP methods are not possible. If [data aging](javascript:call_link\('abendata_aging_glosry.htm'\) "Glossary Entry") is to be respected, this has to be programmed.

Hint

In exceptional cases, applications can bypass this basic rule if they can accept the lack of technical support provided by the AS ABAP infrastructure when ABAP-managed database objects are accessed from outside AS ABAP and errors occur as a result. Applications are themselves responsible for avoiding errors like this and removing any errors that do occur:

-   Applications delivered by SAP must be secured reliably against errors. If necessary, the prerequisites for accessing ABAP-managed database objects from outside AS ABAP must be described in SAP Notes.
-   Partners and customers should only access ABAP-managed database objects from outside AS ABAP when this is allowed by SAP and when the associated prerequisites are known and can be met.

Rules for Valid Use   

Within the database, ABAP-managed database objects can only be accessed from other ABAP-managed database objects. ABAP programs should use [ABAP SQL](javascript:call_link\('abenabap_managed_db_objects_asql.htm'\)) as the primary method for accessing ABAP-managed database objects. [AMDP](javascript:call_link\('abenabap_managed_db_objects_amdp.htm'\)) should only be used when ABAP SQL is not sufficient. And [ABAP-managed Native SQL](javascript:call_link\('abenabap_managed_db_objects_nsql.htm'\)) should itself only be used when AMDP is not sufficient. [Non-ABAP managed Native SQL](javascript:call_link\('abenabap_managed_db_objects_nsql.htm'\)) is not used to access database objects, as specified in the basic rule.

ABAP SQL   

[ABAP SQL](javascript:call_link\('abenabap_managed_db_objects_asql.htm'\)) is the primary method for accessing ABAP-managed database objects. Only ABAP SQL supports all functional and semantic properties of ABAP-managed database objects. Any internal changes made to ABAP-managed database objects are handled by the [ABAP SQL interface](javascript:call_link\('abenabap_sql_interface_glosry.htm'\) "Glossary Entry") and are transparent for the ABAP program.

AMDP   

Unlike Native SQL, [AMDP](javascript:call_link\('abenabap_managed_db_objects_amdp.htm'\)) is a high-order wrapper of database-specific SQL. If the scope of ABAP SQL is not sufficient, the first option is to try AMDP for access to ABAP-managed database objects. This mainly applies to database procedure calls not supported in ABAP SQL, but also to wrappers of SQL elements that do not yet exist in ABAP SQL and which do not have an adequate alternative, such as the use of non-supported built-in functions.

In principle, AMDP should only be used as intended:

-   Calls of [AMDP methods](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") from ABAP or other AMDP methods.
-   Access to [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") using ABAP CDS and ABAP SQL.
-   If possible, no calls from Native SQL

The use of AMDP lifts or weakens some [Native SQL](javascript:call_link\('abenabap_managed_db_objects_nsql.htm'\)) restrictions, but the functional and semantic properties of ABAP-managed database objects are not supported in the same way as in ABAP SQL.

Most of the following rules for Native SQL apply also to the implementation of AMDP methods, particularly to DML writes.

Hint

There is no benefit in moving SQL statements to AMDP methods, if they can also be formulated in ABAP SQL. See the [executable example](javascript:call_link\('abenamdp_vs_abap_sql_abexa.htm'\)).

ABAP-Managed Native SQL   

[ABAP-managed Native SQL](javascript:call_link\('abenabap_managed_db_objects_nsql.htm'\)) ([ADBC](javascript:call_link\('abenadbc.htm'\)), [EXEC SQL](javascript:call_link\('abennativesql.htm'\))) is subject to most of the same restrictions as [non-ABAP-managed Native SQL](javascript:call_link\('abenabap_managed_db_objects_nsql.htm'\)). The field order defined in the ABAP Dictionary is just as unknown as the semantic properties. [Mappings](javascript:call_link\('abennative_sql_type_mapping.htm'\)) between ABAP types and database types are only possible for certain types. There is no [implicit client handling](javascript:call_link\('abenabap_sql_client_handling.htm'\)) and the table buffer is always bypassed. The current instances of [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") must be known to the database, such as a CDS view with input parameters created as a SQL view or database function. Incompatible changes are also a possibility. [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") is bypassed. Access to objects using the [Native SQL interface](javascript:call_link\('abennative_sql_interface_glosry.htm'\) "Glossary Entry") offers some benefits over non-ABAP-managed Native SQL, such as the availability of environment information in session variables (on HANA only and non-modifiable) or the fact that [data aging](javascript:call_link\('abendata_aging_glosry.htm'\) "Glossary Entry") is respected. Despite this, this method should only be used if AMDP methods are not sufficient. The following rules should be followed in this case:

-   Only [DML](javascript:call_link\('abendml_glosry.htm'\) "Glossary Entry") read statements should be used.
    -   These read statements should not depend on any other properties of the ABAP-managed database objects apart from their names and the names of components. It should be noted here that, when database objects of [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") are accessed, even the name cannot be guaranteed
    -   [Mappings](javascript:call_link\('abennative_sql_type_mapping.htm'\)) between ABAP types and database types are only possible for certain types. In all other cases, unexpected results or errors can occur. This applies in particular to platform-dependent truncating or padding of values.
    -   The field order is undefined and is not stable. SELECT \*, for example, should not be used to access objects.
    -   It is probable that an ABAP-managed database object is replaced by a different type of database object, such as a database table by a view.
    -   If necessary, the ABAP-specific properties that are respected automatically in ABAP SQL, such as client handling or special type conversions, must be programmed explicitly when using Native SQL.
-   [DML](javascript:call_link\('abendml_glosry.htm'\) "Glossary Entry") write statements, such as INSERT, UPDATE or, DELETE can cause problems and should be avoided. Alongside the points for reads above, the following should be noted:
    -   There are no ABAP-specific type conversions and [null values](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") are not avoided, which can cause data inconsistencies and problems when accessing objects in ABAP programs.
    -   Native SQL writes are not registered by [buffer synchronization](javascript:call_link\('abenbuffer_synchro.htm'\)) in the [table buffer](javascript:call_link\('abenbuffer_synchro.htm'\)), which means they are not detected in ABAP SQL.
    -   In certain phases in system delivery or in upgrades, ABAP-managed database objects that allow writes can be replaced temporarily by database objects that do not allow writes. Hence, these objects would produce errors when accessed.
-   ABAP-managed database objects should never be accessed using [DDL](javascript:call_link\('abenddl_glosry.htm'\) "Glossary Entry"). It is technically possible to use DDL, however changes to the definition of ABAP-managed databases are the sole responsibility of frameworks such as the ABAP Dictionary or AMDP. In the worst case, the direct use of DDL for ABAP-managed database objects can make AS ABAP unusable.

Hints

-   As is the case when using non-ABAP managed Native SQL, applications that use ABAP-managed Native SQL are responsible for any aspects not supported by the Native SQL interface. One example is when a [CDS-managed DDIC view (obsolete)](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") is accessed whose [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") uses the [CDS session variable](javascript:call_link\('abencds_session_variable_v1.htm'\)) client. This is represented in the database object by the HANA session variable CDS\_CLIENT, which is not set by the Native SQL interface. The application itself must provide the required value or must not perform such an access.
-   It might be possible to handle any future incompatible changes made to ABAP-managed database objects using the Native SQL interface, but this cannot be guaranteed.

Mixed Access   

The various types of access to ABAP-managed database objects can also occur in mixed forms from a technical perspective. This means that one or more applications can use [ABAP SQL](javascript:call_link\('abenabap_managed_db_objects_asql.htm'\)), [AMDP](javascript:call_link\('abenabap_managed_db_objects_amdp.htm'\)), or [Native SQL](javascript:call_link\('abenabap_managed_db_objects_nsql.htm'\)) to access the same database object. There is a risk here that mixing ABAP SQL with AMDP and Native SQL to access objects can produce errors, since Native SQL expects ABAP-specific behavior that is only guaranteed when using ABAP SQL. Examples:

-   Different conversion rules when mapping non-matching types
-   Different handling of null values
-   Differently set environment information

For this reason, care should be taken to preserve the semantics of the ABAP SQL statements when using AMDP and Native SQL to access ABAP-managed data objects that can also be accessed by ABAP SQL.

-   When data is read using AMDP or Native SQL, the type conversions for non-matching types must be respected and the values may need to be modified to make them ABAP-specific.
-   When data is written using AMDP and Native SQL, it must not be modified in ways that make subsequent ABAP SQL statements behave differently than when changes are made using ABAP SQL.

In mixed access cases, all options in the implementation of AMDP methods or Native SQL should be exploited only to the extent that they do not endanger the consistency of an ABAP-managed data model.