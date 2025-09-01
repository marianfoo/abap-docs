  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Maintenance](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_tests.htm) →  [Internal Test Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentests_internal.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: VERIFICATION-MESSAGE, ABAPVERIFICATION-MESSAGE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion for improvement:)

VERIFICATION-MESSAGE

This statement is for internal use only.
It must not be used in application programs.

Syntax

VERIFICATION-MESSAGE id mess
                     *\[*PRIORITY prio*\]*
                     *\[*RESPONSIBLE user*\]*
                     *\[*MAIL mail*\]*
                     *\[*OBJECT type name*\]*.

Additions:

[1\. ... PRIORITY prio](#!ABAP_ADDITION_1@1@)
[2\. ... RESPONSIBLE user](#!ABAP_ADDITION_2@2@)
[3\. ... MAIL mail](#!ABAP_ADDITION_3@3@)
[4\. ... OBJECT type name](#!ABAP_ADDITION_4@4@)

Effect

This statement is only intended for use in verification programs of the transaction SVER. It sends a verification message to the verification API.

id is used to specify an ID for the message of up to six digits, and mess is used for the message itself.

Addition 1   

... PRIORITY prio

Effect

prio is used to specify a priority (1: serious error, 2: error, 3: warning, 4: notification, 5: information).

Hint

The constants intended for this purpose from the class CL\_VERI\_GENERAL can also be specified for prio instead of literals.

Addition 2   

... RESPONSIBLE user

Effect

user can be used to specify a user who receives the verification message by mail. If no user is specified, the author of the verification program is used.

Addition 3   

... MAIL mail

Effect

Obsolete: mail was previously used to specify a template for the verification message.

Addition 4   

... OBJECT type name

Effect

type and name can be used to specify an object from the database table TADIR to enable navigation from the log display.

If an entry from TADIR is specified using this addition, the verification message is sent to the person specified as responsible in the table TADIR, and not to the author of the verification program.