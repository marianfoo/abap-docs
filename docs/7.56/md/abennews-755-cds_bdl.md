  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.55](javascript:call_link\('abennews-755.htm'\)) →  [ABAP RESTful Application Programming Model in Release 7.55](javascript:call_link\('abennews-755-restful.htm'\)) → 

CDS BDL in Release 7.55

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

The new statement [mapping for](javascript:call_link\('abenbdl_type_mapping.htm'\)) can be used to map field names from legacy code to field names from the current data model. Available for unmanaged and managed business objects.

Modification 2   

Additional Save in Managed BOs

The new statement [with additional save](javascript:call_link\('abenbdl_saving.htm'\)) can be used to enhance the default save sequence in a managed implementation scenario.

Modification 3   

Unmanaged Save in Managed BOs

The new statement [with unmanaged save](javascript:call_link\('abenbdl_saving.htm'\)) can be used to implement an own saving strategy in a managed implementation scenario.

Modification 4   

Implementation Grouping

The new statement [group](javascript:call_link\('abenbdl_grouping.htm'\)) can be used to divide the implementation-relevant parts of a BO's business logic into several groups for behavior implementation.

Modification 5   

Managed Internal Numbering for Managed RAP BOs

The new statement [numbering:managed](javascript:call_link\('abenbdl_field_numbering.htm'\)) can be used to automatically generate values for primary key fields with a UUID. Available for managed implementation scenarios.

Modification 6   

New Options for Output Parameters

For actions and functions, the [output parameter](javascript:call_link\('abenbdl_action_output_para.htm'\)) can now be an entity or a structure.

The addition [selective](javascript:call_link\('abenbdl_action_output_para.htm'\)) can be used for an output parameter to return only parts of the result structure.

Modification 7   

Unmanaged Lock in Managed RAP BOs

The new statement [lock master unmanaged](javascript:call_link\('abenbdl_locking.htm'\)) can be used if the application developer wants to implement an own locking mechanism in a managed implementation scenario. An own locking mechanism can be used instead of the RAP locking mechanism provided by the RAP framework.

Modification 8   

Draft Support for RAP BOs

The new statement [with draft](javascript:call_link\('abenbdl_with_draft.htm'\)) can be used to enable the draft concept for a RAP BO.

Modification 9   

Determine Actions

Determine actions are a new type of action defined using [determine action](javascript:call_link\('abenbdl_determine_action.htm'\)). With a determine action, determinations and validations can be executed on request.

Modification 10   

Precheck for Modify Operations

The new RAP BO operation addition [precheck](javascript:call_link\('abenbdl_precheck.htm'\)) can be used to prevent illegal changes from reaching the application buffer by prechecking modify operations.

Modification 11   

New Field Characteristics

CDS BDL now supports the following new [field characteristics](javascript:call_link\('abenbdl_field_char.htm'\)):

-   [mandatory:create](javascript:call_link\('abenbdl_field_char.htm'\))
-   [readonly:update](javascript:call_link\('abenbdl_field_char.htm'\))