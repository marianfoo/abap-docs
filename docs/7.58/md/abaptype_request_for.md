  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [BDEF Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TYPE%20REQUEST%20FOR%2C%20ABAPTYPE_REQUEST_FOR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TYPE REQUEST FOR

Syntax

... REQUEST FOR *{* *{* CHANGE
                  *|* DELETE *}*
                    bdef *}* ...

Alternatives:

[1\. ... CHANGE bdef](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... DELETE bdef](#!ABAP_ALTERNATIVE_2@2@)

Effect

A structured data type that is only used in the context of managed implementations [with additional save](javascript:call_link\('abenbdl_saving.htm'\)) and [with unmanaged save](javascript:call_link\('abenbdl_saving.htm'\)). In these cases, the [ABP](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") contains the save\_modified method that is part of a local saver class that inherits from the base saver class CL\_ABAP\_BEHAVIOR\_SAVER. Within the save\_modified method, the following predefined parameters can be addressed:

-   create: structure typed with TYPE REQUEST FOR CHANGE
-   update: structure typed with TYPE REQUEST FOR CHANGE
-   delete: structure typed TYPE REQUEST FOR DELETE

Alternative 1   

... CHANGE bdef

Effect

Used for the predefined create and update parameters that are only available in local saver classes of the [ABP](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") that inherit from the base saver class CL\_ABAP\_BEHAVIOR\_SAVER. create and update that are typed with TYPE REQUEST FOR CHANGE contain nested tables that are named according to those entities for which the [BDEF](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") has specifications with additional save or with unmanaged save respectively and for which CREATE and/or UPDATE operations are allowed. The nested tables are of type [TYPE TABLE FOR CHANGE](javascript:call_link\('abaptype_table_for.htm'\)). The tables include those [RAP BO instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") that are to be created (or updated) and saved.

Alternative 2   

... DELETE bdef

Effect

Used for the predefined delete parameter that is only available in local saver classes of the [ABP](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") that inherit from the base saver class CL\_ABAP\_BEHAVIOR\_SAVER. delete is typed with TYPE REQUEST FOR DELETE. It contains nested tables that are named according to those entities for which the [BDEF](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") has specifications with additional save, or with unmanaged save respectively; and for which DELETE operations are allowed. The nested tables are of type [TYPE TABLE FOR KEY OF](javascript:call_link\('abaptype_table_for.htm'\)). The table includes those [RAP BO instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") that are to be deleted.

Executable Example

-   The example [ABAP EML - TYPE REQUEST FOR in a Managed RAP BO with Additional Save](javascript:call_link\('abenrap_additional_save_abexa.htm'\)) shows the types TYPE REQUEST FOR CHANGE and TYPE REQUEST FOR DELETE in the context of a simple managed RAP BO whose BDEF is specified with with additional save.
-   The example [ABAP EML - TYPE REQUEST FOR in a managed RAP BO with unmanaged save](javascript:call_link\('abenrap_managed_unm_save_abexa.htm'\)) shows the types TYPE REQUEST FOR CHANGE and TYPE REQUEST FOR DELETE in the context of a simple managed RAP BO whose BDEF is specified with with unmanaged save.

Continue
![Example](exa.gif "Example") [ABAP EML - TYPE REQUEST FOR in a Managed RAP BO with Additional Save](javascript:call_link\('abenrap_additional_save_abexa.htm'\))
![Example](exa.gif "Example") [ABAP EML - TYPE REQUEST FOR in a Managed RAP BO with Unmanaged Save](javascript:call_link\('abenrap_managed_unm_save_abexa.htm'\))