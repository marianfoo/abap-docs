---
title: "CALL TRANSACTION, Obsolete"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transaction_shortref.htm) Obsolete Syntax CALL TRANSACTION ta AND SKIP FIRST SCREEN(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transaction_standard.htm)   USING bdc_tab .
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transaction_auth_obs.htm"
abapFile: "abapcall_transaction_auth_obs.htm"
keywords: ["do", "if", "case", "try", "data", "abapcall", "transaction", "auth", "obs"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Calls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_call_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CALL TRANSACTION, Obsolete, ABAPCALL_TRANSACTION_AUTH_OBS, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CALL TRANSACTION, Obsolete

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transaction_shortref.htm)

Obsolete Syntax

CALL TRANSACTION ta *\[*[AND SKIP FIRST SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transaction_standard.htm)*\]*
                  *|* *\[* [USING bdc\_tab ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transaction_using.htm)*\]*.

Effect

Neither of the additions [WITH*|*WITHOUT AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transaction_authority.htm) are specified in this variant of the statement [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transaction.htm). In this case, the content of the DDIC database table TCDCOUPLES specifies whether automatic authorization checks take place or not.

If the current transaction code and the called transaction code exist as a pair in the columns TCODE and CALLED of the database table TCDCOUPLES and if the database field OKFLAG of this row has the value X, the same authorization checks are performed as when the addition [WITH AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transaction_authority.htm) is specified. If this is not the case, no check takes place.

The entries in the DDIC database table TCDCOUPLES can be maintained using transaction SE97. The entry in the column MAINTFLAG controls the program behavior if the authorization is missing (see the documentation of the data element TCDCOUPMSG).

The obsolete control of the authorization check described here can be overridden by the hidden profile parameter auth/check/calltransaction. This profile parameter is not provided by default, but may have been created manually. The following table shows in which combinations of the value in OKFLAG in TCDCOUPLES (first column) and the value of existing profile parameter (first row) an authorization check takes place.

 

0

1

2

3

X

\-

x

x

x

N

\-

x

\-

\-

blank

\-

x

\-

x

The last row also describes the behavior for when TCDCOUPLES does not contain a corresponding entry. Value 2 for the profile parameter is the standard behavior.

The security tests in the [extended program check](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenextended_program_check_glosry.htm "Glossary Entry") ignore both the content of the DDIC database table TCDCOUPLES and the hidden profile parameter auth/check/calltransaction. These tests always produce an error if neither of the additions WITH*|*WITHOUT AUTHORITY-CHECK is specified and if no preceding authorization check is performed by calling the function module AUTHORITY\_CHECK\_TCODE or the statement [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapauthority-check.htm).

Hints

-   The function module AUTHORITY\_CHECK\_TCODE also depends on the content of the DDIC database table TCDCOUPLES. It checks the associated authorization objects only if the database field OKFLAG in TCDCOUPLES has the value X or blank. If the field has the value N, the function module does not perform a check. If the authorization is to be checked regardless of the table entries, the statement AUTHORITY-CHECK must be used.
-   The dependence of the automatic authorization checks on entries in a database table and a hidden profile parameter is extremely error-prone. For this reason, this form of the statement CALL TRANSACTION is obsolete. If possible, one of the additions [WITH AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transaction_authority.htm) or [WITHOUT AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transaction_authority.htm) should be used.
-   In releases where the additions [WITH AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transaction_authority.htm) or [WITHOUT AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transaction_authority.htm) did not yet exist, the recommendation was that the authorization check be performed before the transaction was called using the function module AUTHORITY\_CHECK\_TCODE or the statement [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapauthority-check.htm). Here, the function module AUTHORITY\_CHECK\_TCODE also has a dependency on the DDIC database table TCDCOUPLES, but the statement AUTHORITY-CHECK does not. The security tests in the [extended program check](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenextended_program_check_glosry.htm "Glossary Entry") still accept preceding checks of this nature but in new programs the additions should be used.