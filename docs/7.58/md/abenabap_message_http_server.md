  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [Messages - Behavior](javascript:call_link\('abenabap_messages_types.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%20-%20ICF%20Processing%2C%20ABENABAP_MESSAGE_HTTP_SERVER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Messages - ICF Processing

Messages sent during [ICF processing](javascript:call_link\('abenicf_processing_glosry.htm'\) "Glossary Entry"), that is, when a HTTP/HTTPS query or SMTP query is handled by an [HTTP request handler](javascript:call_link\('abenicf.htm'\)), behave in the same way as in [RFC processing](javascript:call_link\('abenabap_message_rfc.htm'\)). Programs or procedures called in the handler are executed in the service context and their messages behave accordingly.

Hint

[Dialog processing](javascript:call_link\('abenabap_message_dialog.htm'\)) or [list processing](javascript:call_link\('abenabap_message_list_processing.htm'\)) can only take place for an ICF server if the Service Data → GUI Link setting for the service is set to Yes in the transaction SICF. Messages of the types I, S, and W are always ignored by default and messages of the types A, E, and X always terminate processing followed by a [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry").