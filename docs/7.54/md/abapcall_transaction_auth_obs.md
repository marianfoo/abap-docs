  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Calls](javascript:call_link\('abenprogram_call_obsolete.htm'\)) → 

CALL TRANSACTION - Obsolete

[Quick Reference](javascript:call_link\('abapcall_transaction_shortref.htm'\))

Obsolete Syntax

CALL TRANSACTION ta *\[*[AND SKIP FIRST SCREEN](javascript:call_link\('abapcall_transaction_standard.htm'\))*\]*
                  *|* *\[* [USING bdc\_tab ...](javascript:call_link\('abapcall_transaction_using.htm'\))*\]*.

Effect

Neither of the additions [WITH*|*WITHOUT AUTHORITY-CHECK](javascript:call_link\('abapcall_transaction_authority.htm'\)) are specified in this variant of the statement [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)). In this case, the content of the database table TCDCOUPLES specifies whether automatic authorization checks are made or not.

If the current transaction code and the called transaction code appear as a pair in the columns TCODE and CALLED of the database table TCDCOUPLES and if the database field OKFLAG of this row has the value "X", the same authorization checks are performed as when the addition [WITH AUTHORITY-CHECK](javascript:call_link\('abapcall_transaction_authority.htm'\)) is specified. If this is not the case, no check takes place.

The entries in the database table TCDCOUPLES can be defined in transaction SE97. The entry in the column MAINTFLAG controls the program behavior if the authorization is missing (see the documentation of the data element TCDCOUPMSG).

The obsolete behavior described here for the authorization check can be overridden by the hidden profile parameter auth/check/calltransaction. This profile parameter is not provided as standard but it can be created manually. The following table shows the value combinations - value in OKFLAG in TCDCOUPLES (first column) and value of existing profile parameter (first row) - for which an authorization check is performed.

 

0

1

2

3

"X"

\-

x

x

x

"N"

\-

x

\-

\-

" "

\-

x

\-

x

The last row also describes the behavior for when TCDCOUPLES does not contain a corresponding entry. Value 2 for the profile parameter is the standard behavior.

The security tests in the [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry") ignore both the content of the database table TCDCOUPLES and the hidden profile parameter auth/check/calltransaction. These tests always produce an error if neither of the additions WITH*|*WITHOUT AUTHORITY-CHECK is specified and if no preceding authorization check is made by calling the function module AUTHORITY\_CHECK\_TCODE or the statement [AUTHORITY-CHECK](javascript:call_link\('abapauthority-check.htm'\)).

Notes

-   The function module AUTHORITY\_CHECK\_TCODE is also controlled by the content of the database table TCDCOUPLES. It checks the associated authorization objects only if the database field OKFLAG in TCDCOUPLES has the value "X" or is empty. If the field has the value "N", the function module does not perform a check. If the authorization is to be checked regardless of the table entries, the statement AUTHORITY-CHECK needs to be used.
    
-   The association between automatic authorization checks on entries in a database table and a hidden profile parameter is very prone to errors. For this reason, this form of the statement CALL TRANSACTION is obsolete. If possible, one of the additions [WITH AUTHORITY-CHECK](javascript:call_link\('abapcall_transaction_authority.htm'\)) or [WITHOUT AUTHORITY-CHECK](javascript:call_link\('abapcall_transaction_authority.htm'\)) should be used.
    
-   In releases where the additions [WITH AUTHORITY-CHECK](javascript:call_link\('abapcall_transaction_authority.htm'\)) or [WITHOUT AUTHORITY-CHECK](javascript:call_link\('abapcall_transaction_authority.htm'\)) did not yet exist, the recommendation was that the authorization check be performed before the transaction was called using the function module AUTHORITY\_CHECK\_TCODE or the statement [AUTHORITY-CHECK](javascript:call_link\('abapauthority-check.htm'\)). Here, the function module AUTHORITY\_CHECK\_TCODE also has a dependency on the database table TCDCOUPLES (the statement AUTHORITY-CHECK does not). The security tests in the [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry") continue to accept preceding checks of this nature but in new programs the additions should be used.