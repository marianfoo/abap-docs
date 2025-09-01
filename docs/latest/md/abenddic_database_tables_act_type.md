  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm) →  [DDIC - Technical Properties of Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_tech.htm) →  [DDIC - Table-Specific Technical Properties of Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_techspec.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Activation%20Type%20of%20Database%20Tables%2C%20ABENDDIC_DATABASE_TABLES_ACT_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

DDIC - Activation Type of Database Tables

The activation type defines whether a DDIC database table can be activated in an ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_tools.htm) or whether it must be controlled using the ABAP runtime framework environment. This setting is not relevant for DDIC database tables in application programming. In these tables, the default value 00 should be preserved. The following settings are possible:

-   Activation type 00
    
    The default setting in which a DDIC database table can be activated in an ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_tools.htm). DDIC database tables in application programming should always have this activation type.
    
-   The following values for the activation type only apply to those DDIC database tables required by the ABAP runtime framework itself and hence only to internal SAP developments:
    -   Activation type 01
        
        The [DDIC runtime object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_runtime_object_glosry.htm "Glossary Entry") of the database table must be created using an [ABAP kernel](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenkernel_glosry.htm "Glossary Entry") program before the table is activated in an ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_tools.htm). This makes it impossible to modify and activate important system tables directly.
        
    -   Activation type 02
        
        The DDIC database table is used in the [ABAP kernel](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenkernel_glosry.htm "Glossary Entry"), but the [DDIC runtime object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_runtime_object_glosry.htm "Glossary Entry") can be activated (and hence created) in an ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_tools.htm). It may be necessary to adjust the consumer programs of the kernel. This is indicated by a note in the activation log.
        
    -   Activation type 10
        
        The DDIC database table is required before other objects are modified as part of a transport.