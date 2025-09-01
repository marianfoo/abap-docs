---
title: "VERIFICATION-MESSAGE"
description: |
  This statement is for internal use only. It must not be used in application programs. Syntax VERIFICATION-MESSAGE id mess PRIORITY prio RESPONSIBLE user MAIL mail OBJECT type name. Extras: 1. ... PRIORITY prio(#!ABAP_ADDITION_1@1@) 2. ... RESPONSIBLE user(#!ABAP
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapverification-message.htm"
abapFile: "abapverification-message.htm"
keywords: ["do", "if", "try", "class", "data", "abapverification", "message"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_tests.htm) →  [Internal Test Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentests_internal.htm) → 

VERIFICATION-MESSAGE

This statement is for internal use only.
It must not be used in application programs.

Syntax

VERIFICATION-MESSAGE id mess
                     *\[*PRIORITY prio*\]*
                     *\[*RESPONSIBLE user*\]*
                     *\[*MAIL mail*\]*
                     *\[*OBJECT type name*\]*.

Extras:

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

Note

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