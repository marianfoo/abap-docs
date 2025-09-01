  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-75.htm) →  [News for ABAP Release 7.55](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-755.htm) →  [ABAP RESTful Application Programming Model in ABAP Release 7.55](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-755-restful.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20BDL%20in%20ABAP%20Release%207.55%2C%20ABENNEWS-755-CDS_BDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP BDL in ABAP Release 7.55

[1\. Type Mapping](#!ABAP_MODIFICATION_1@1@)
[2\. Additional Save in Managed BOs](#!ABAP_MODIFICATION_2@2@)
[3\. Unmanaged Save in Managed BOs](#!ABAP_MODIFICATION_3@3@)
[4\. Implementation Grouping](#!ABAP_MODIFICATION_4@4@)
[5\. Managed Internal Numbering for Managed RAP BOs](#!ABAP_MODIFICATION_5@5@)
[6\. New Options for Output Parameters](#!ABAP_MODIFICATION_6@6@)
[7\. Unmanaged Lock in Managed RAP BOs](#!ABAP_MODIFICATION_7@7@)
[8\. Draft Support for RAP BOs](#!ABAP_MODIFICATION_8@8@)
[9\. Determine Actions](#!ABAP_MODIFICATION_9@9@)
[10\. Precheck for Modify Operations](#!ABAP_MODIFICATION_10@10@)
[11\. New Field Characteristics](#!ABAP_MODIFICATION_11@11@)

Modification 1   

Type Mapping

The new statement [mapping for](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_type_mapping.htm) can be used to map field names from legacy code to field names from the current data model. Available for unmanaged and managed business objects.

Modification 2   

Additional Save in Managed BOs

The new statement [with additional save](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_saving.htm) can be used to enhance the default save sequence in a managed implementation scenario.

Modification 3   

Unmanaged Save in Managed BOs

The new statement [with unmanaged save](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_saving.htm) can be used to implement an own saving strategy in a managed implementation scenario.

Modification 4   

Implementation Grouping

The new statement [group](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_grouping.htm) can be used to divide the implementation-relevant parts of a BO's business logic into several groups for behavior implementation.

Modification 5   

Managed Internal Numbering for Managed RAP BOs

The new statement [numbering:managed](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_field_numbering.htm) can be used to automatically generate values for primary key fields with a UUID. Available for managed implementation scenarios.

Modification 6   

New Options for Output Parameters

For actions and functions, the [output parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_output_para.htm) can now be an entity or a structure.

The addition [selective](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_output_para.htm) can be used for an output parameter to return only parts of the result structure.

Modification 7   

Unmanaged Lock in Managed RAP BOs

The new statement [lock master unmanaged](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_locking.htm) can be used if the application developer wants to implement an own locking mechanism in a managed implementation scenario. An own locking mechanism can be used instead of the RAP locking mechanism provided by the RAP framework.

Modification 8   

Draft Support for RAP BOs

The new statement [with draft](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_with_draft.htm) can be used to enable the draft concept for a RAP BO.

Modification 9   

Determine Actions

Determine actions are a new type of action defined using [determine action](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_determine_action.htm). With a determine action, determinations and validations can be executed on request.

Modification 10   

Precheck for Modify Operations

The new RAP BO operation addition [precheck](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_precheck.htm) can be used to prevent illegal changes from reaching the application buffer by prechecking modify operations.

Modification 11   

New Field Characteristics

RAP BDL now supports the following new [field characteristics](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_field_char.htm):

-   [mandatory:create](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_field_char.htm)
-   [readonly:update](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_field_char.htm)