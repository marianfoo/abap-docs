---
title: "Contexts, Message Handling"
description: |
  This example demonstrates how messages can be handled in contexts. Source Code REPORT  demo_context_message. DATA: c_from TYPE spfli-cityfrom, c_to   TYPE spfli-cityto. CONTEXTS docu_test1. DATA: context_inst TYPE context_docu_test1. DATA: itab TYPE TABLE OF symsg, line LIKE LINE OF itab. SU
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencontext_message_abexa.htm"
abapFile: "abencontext_message_abexa.htm"
keywords: ["do", "if", "data", "internal-table", "abencontext", "message", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_storage_obsolete.htm) →  [Contexts (Obsolete)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencontext.htm) → 

Contexts, Message Handling

This example demonstrates how messages can be handled in contexts.

Source Code

REPORT  demo\_context\_message.
DATA: c\_from TYPE spfli-cityfrom,
      c\_to   TYPE spfli-cityto.
CONTEXTS docu\_test1.
DATA: context\_inst TYPE context\_docu\_test1.
DATA: itab TYPE TABLE OF symsg,
      line LIKE LINE OF itab.
SUPPLY carrid = 'XX'
       connid = '400'
       TO CONTEXT context\_inst.
DEMAND cityfrom = c\_from
       cityto   = c\_to
       FROM CONTEXT context\_inst MESSAGES INTO itab.
IF sy-subrc NE 0.
  line = itab\[ 1 \].
  MESSAGE ID line-msgid TYPE 'I' NUMBER line-msgno
          WITH line-msgv1 line-msgv2 DISPLAY LIKE line-msgty.
ENDIF.
DEMAND cityfrom = c\_from
       cityto   = c\_to
       FROM CONTEXT context\_inst.

Description

First, the message is handled in the program using the addition MESSAGES INTO of the statement DEMAND. The message is then available for further processing in the internal table itab. In the second DEMAND statement, the message is handled by the system and the program cancels with an error message.