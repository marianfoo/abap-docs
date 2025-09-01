  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Contexts (Obsolete)](javascript:call_link\('abencontext.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Contexts%20-%20Message%20Handling%2C%20ABENCONTEXT_MESSAGE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Contexts - Message Handling

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

First, the message is handled in the program using the addition MESSAGES INTO of the statement DEMAND. The message is then available for further processing in the internal table itab. In the second DEMAND statement, the message is handled by the system and the program terminates with an error message.