  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-75.htm) →  [News for ABAP Release 7.52](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-752.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20AMDP%20in%20ABAP%20Release%207.52%2C%20ABENNEWS-752-AMDP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

AMDP in ABAP Release 7.52

[1\. Reference to ABAP Types](#!ABAP_MODIFICATION_1@1@)
[2\. AMDP Options](#!ABAP_MODIFICATION_2@2@)
[3\. Logical HDI Containers](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Reference to ABAP Types

When an [AMDP method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_method_glosry.htm "Glossary Entry") is implemented in an AMDP class with SQLScript, the following new [AMDP macro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_macro_glosry.htm "Glossary Entry")

["$ABAP.type( \[name =\] abap\_type )"](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_abap_types.htm)

can be used to reference ABAP types. The ABAP runtime environment replaces these schemas on the database with the associated database types.

Modification 2   

AMDP Options

The new addition [AMDP OPTIONS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_amdp_options.htm) for [METHODS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods.htm) and [CLASS-METHODS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass-methods.htm) statements can be used to define attributes of [AMDP methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_method_glosry.htm "Glossary Entry") in their declaration:

-   The [READ-ONLY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_amdp_options.htm) option only allows reads in the implementation of the AMDP methods.
-   The [CDS SESSION CLIENT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_amdp_options.htm) option sets the [session variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensession_variable_glosry.htm "Glossary Entry") of the database that can be addressed under the name[$session.client](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_session_variable_v1.htm) in the [CDS DDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_ddl_glosry.htm "Glossary Entry") of the [ABAP CDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_cds_glosry.htm "Glossary Entry") to a particular value when the method is called from ABAP. It avoids the warning from the syntax check and the exception CX\_AMDP\_CDS\_CLIENT\_MISMATCH when an AMDP method accesses the [CDS managed DDIC view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") of a [CDS view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_glosry.htm "Glossary Entry") whose [client handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_client_handling_v1.htm) is determined by the annotation [@ClientHandling.algorithm: #SESSION\_VARIABLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_client_handling_v1.htm).

Modification 3   

Logical HDI Containers

Alongside the existing [logical database schemas](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogical_database_schema_glosry.htm "Glossary Entry"), [logical HDI containers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogical_hdi_container_glosry.htm "Glossary Entry") can now be used as further [logical schemas](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogical_schema_glosry.htm "Glossary Entry") in the [AMDP macro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_macro_glosry.htm "Glossary Entry") [$ABAP.schema](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_logical_db_schemas.htm). The mapping of a physical database schema to a logical HDI container is made in the definition of an [ABAP-managed HDI container](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamhc_glosry.htm "Glossary Entry"), which itself links [HDI objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhdi_object_glosry.htm "Glossary Entry") to the [Change and Transport System (CTS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencts_glosry.htm "Glossary Entry").