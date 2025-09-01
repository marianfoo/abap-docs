  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.52](javascript:call_link\('abennews-752.htm'\)) → 

AMDP in Release 7.52

[1\. Reference to ABAP Types](#!ABAP_MODIFICATION_1@1@)
[2\. AMDP Options](#!ABAP_MODIFICATION_2@2@)
[3\. Logical HDI Containers](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Reference to ABAP Types

When an [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") is implemented in an AMDP class with SQLScript, the following new [AMDP macro](javascript:call_link\('abenamdp_macro_glosry.htm'\) "Glossary Entry")

["$ABAP.type( \[name =\] abap\_type )"](javascript:call_link\('abenamdp_abap_types.htm'\))

can be used to reference ABAP types. The ABAP runtime environment replaces these schemas on the database with the associated database types.

Modification 2   

AMDP Options

The new addition [AMDP OPTIONS](javascript:call_link\('abapmethods_amdp_options.htm'\)) for [METHODS](javascript:call_link\('abapmethods.htm'\)) and [CLASS-METHODS](javascript:call_link\('abapclass-methods.htm'\)) statements can be used to define attributes of [AMDP methods](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") in their declaration:

-   The [READ-ONLY](javascript:call_link\('abapmethods_amdp_options.htm'\)) option only allows reads in the implementation of the AMDP methods.
-   The [CDS SESSION CLIENT](javascript:call_link\('abapmethods_amdp_options.htm'\)) option sets the [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry") of the database that can be addressed under the name[$session.client](javascript:call_link\('abencds_session_variable_v1.htm'\)) in the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") of the [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") to a particular value when the method is called from ABAP. It avoids the warning from the syntax check and the exception CX\_AMDP\_CDS\_CLIENT\_MISMATCH when an AMDP method accesses the [CDS managed DDIC view](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") whose [client handling](javascript:call_link\('abencds_view_client_handling_v1.htm'\)) is determined by the annotation [@ClientHandling.algorithm: #SESSION\_VARIABLE](javascript:call_link\('abencds_view_client_handling_v1.htm'\)).

Modification 3   

Logical HDI Containers

Alongside the existing [logical database schemas](javascript:call_link\('abenlogical_database_schema_glosry.htm'\) "Glossary Entry"), [logical HDI containers](javascript:call_link\('abenlogical_hdi_container_glosry.htm'\) "Glossary Entry") can now be used as further [logical schemas](javascript:call_link\('abenlogical_schema_glosry.htm'\) "Glossary Entry") in the [AMDP macro](javascript:call_link\('abenamdp_macro_glosry.htm'\) "Glossary Entry") [$ABAP.schema](javascript:call_link\('abenamdp_logical_db_schemas.htm'\)). The mapping of a physical database schema to a logical HDI container is made in the definition of an [ABAP-managed HDI container](javascript:call_link\('abenamhc_glosry.htm'\) "Glossary Entry"), which itself links [HDI objects](javascript:call_link\('abenhdi_object_glosry.htm'\) "Glossary Entry") to the [Change and Transport System (CTS)](javascript:call_link\('abencts_glosry.htm'\) "Glossary Entry").