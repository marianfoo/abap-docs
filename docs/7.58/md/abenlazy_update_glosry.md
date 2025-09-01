  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20lazy%20update%2C%20ABENLAZY_UPDATE_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

lazy update

Procedure to create or update non-unique [secondary table keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") in [internal tables](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry"). Non-unique secondary tables keys are not updated straight after insert operations using [INSERT](javascript:call_link\('abapinsert_itab.htm'\)) or [APPEND](javascript:call_link\('abapappend.htm'\)), a block operation in which the whole table body is filled at once, or after a modifying operation using [MODIFY](javascript:call_link\('abapmodify_itab.htm'\)), [field symbols](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry"), or [data references](javascript:call_link\('abendata_reference_glosry.htm'\) "Glossary Entry"). They are updated at the next explicit usage. See also [direct update](javascript:call_link\('abendirect_update_glosry.htm'\) "Glossary Entry") and [delayed update](javascript:call_link\('abendelayed_update_glosry.htm'\) "Glossary Entry").

[→ More about](javascript:call_link\('abenitab_key_secondary_update.htm'\))