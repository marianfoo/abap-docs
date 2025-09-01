---
title: "Messages - ICF Processing"
description: |
  Messages sent during ICF processing(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenicf_processing_glosry.htm 'Glossary Entry'), that is, when a HTTP/HTTPS query or SMTP query is handled by an HTTP request handler(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenicf.
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_message_http_server.htm"
abapFile: "abenabap_message_http_server.htm"
keywords: ["do", "if", "try", "data", "types", "abenabap", "message", "http", "server"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_messages.htm) →  [Messages - Behavior](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_messages_types.htm) → 

Messages - ICF Processing

Messages sent during [ICF processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenicf_processing_glosry.htm "Glossary Entry"), that is, when a HTTP/HTTPS query or SMTP query is handled by an [HTTP request handler](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenicf.htm), behave in the same way as in [RFC processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_message_rfc.htm). Programs or procedures called in the handler are executed in the service context and their messages behave accordingly.

Hint

[Dialog processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_message_dialog.htm) or [list processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_message_list_processing.htm) can only take place for an ICF server if the Service Data → GUI Link setting for the service is set to "Yes" in the transaction SICF. Messages of the types I, S, and W are always ignored by default and messages of the types A, E, and X always terminate processing followed by a [database rollback](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_rollback_glosry.htm "Glossary Entry").