  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

lazy update

Method for creating or updating non-unique [secondary table keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") in [internal tables](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry"). Non-unique secondary tables keys are not updated straight after insert operations using [INSERT](javascript:call_link\('abapinsert_itab.htm'\)) or [APPEND](javascript:call_link\('abapappend.htm'\)), or after a block operation that fills the whole table body at once, or after an operation using [MODIFY](javascript:call_link\('abapmodify_itab.htm'\)), or using [field symbols](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry") or [data references](javascript:call_link\('abendata_reference_glosry.htm'\) "Glossary Entry"). The keys are updated the next time they are used explicitly. See also [direct update](javascript:call_link\('abendirect_update_glosry.htm'\) "Glossary Entry") and [delayed update](javascript:call_link\('abendelayed_update_glosry.htm'\) "Glossary Entry").

[→ More](javascript:call_link\('abenitab_key_secondary_update.htm'\))