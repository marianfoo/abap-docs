  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-75.htm) →  [News for ABAP Release 7.58](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-758.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20Access%20Control%20in%20ABAP%20Release%207.58%2C%20ABENNEWS-758-CDS_ACCESS_CONTROL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%
20for%20improvement:)

ABAP CDS Access Control in ABAP Release 7.58

[1\. New Type of Access Rule for CDS Projection Views](#!ABAP_MODIFICATION_1@1@)
[2\. New DCL Functions](#!ABAP_MODIFICATION_2@2@)

Modification 1   

New Type of Access Rule for CDS Projection Views

A new type of [access rule](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_rules.htm) is available for CDS projection views of type [CDS transactional query](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_transactional_pv_glosry.htm "Glossary Entry"): the [projection\_rule](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_proj_rule.htm) defined with the statement [GRANT SELECT ON ... AS PROJECTION ON ... FALLBACK ASSOCIATION ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_proj_rule.htm).

Modification 2   

New DCL Functions

Two new DCL functions are available:

-   [SWITCH\_RUNTIME\_STATE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_function.htm)
-   [TOGGLE\_RUNTIME\_STATE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_function.htm)

Both functions retrieve the runtime state of a switch in the Switch Framework.