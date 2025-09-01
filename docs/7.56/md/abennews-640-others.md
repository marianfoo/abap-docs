  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [News for Release 6.40](javascript:call_link\('abennews-640.htm'\)) → 

Further Changes in Release 6.40

[1\. VALUE addition for all DATA statements](#!ABAP_MODIFICATION_1@1@)
[2\. LEAVE TO CURRENT TRANSACTION](#!ABAP_MODIFICATION_2@2@)
[3\. INTO addition for the CLEANUP statement](#!ABAP_MODIFICATION_3@3@)
[4\. IF FOUND addition for the INCLUDE statement](#!ABAP_MODIFICATION_4@4@)
[5\. Data Compression with GZIP](#!ABAP_MODIFICATION_5@5@)
[6\. Random Number Generator](#!ABAP_MODIFICATION_6@6@)
[7\. New Method in CL\_SYSTEM\_TRANSACTION\_STATE](#!ABAP_MODIFICATION_7@7@)
[8\. Variant MESSAGE oref for Messages](#!ABAP_MODIFICATION_8@8@)
[9\. Behavior of Error Messages in LOAD-OF-PROGRAM](#!ABAP_MODIFICATION_9@9@)
[10\. Revision of ABAP Keyword Documentation](#!ABAP_MODIFICATION_10@10@)

Modification 1   

VALUE addition for all DATA statements

The addition VALUE can now be used in all variants of the statement [DATA](javascript:call_link\('abapdata.htm'\)) and in all related statements, like [CONSTANTS](javascript:call_link\('abapconstants.htm'\)). Previously, the addition could not be used when creating bound table types. It is now also possible to create constants with bound table types.

Modification 2   

LEAVE TO CURRENT TRANSACTION

If the new addition CURRENT TRANSACTION is specified after [LEAVE TO TRANSACTION,](javascript:call_link\('abapleave_to_transaction.htm'\)) the current [transaction](javascript:call_link\('abentransaction_glosry.htm'\) "Glossary Entry") is called using the transaction code used to call CALL TRANSACTION or LEAVE TO TRANSACTION. Except in the case of a [parameter transaction](javascript:call_link\('abenparameter_transaction_glosry.htm'\) "Glossary Entry") or [variant transactions](javascript:call_link\('abenvariant_transaction_glosry.htm'\) "Glossary Entry"), this is the same transaction code as in the sy-tcode system field. For parameter or variant transactions it is their transaction code, while sy-tcode contains the name of the implicitly called [dialog transaction](javascript:call_link\('abendialog_transaction_glosry.htm'\) "Glossary Entry"). The transaction code for the current transaction can also be obtained using the new static method GET\_CURRENT\_TRANSACTION of class CL\_DYNPRO.

Hint

This change was also transported back to Release 6.20.

Modification 3   

INTO addition for the CLEANUP statement

The new addition INTO of the statement [CLEANUP](javascript:call_link\('abapcleanup.htm'\)) is used to make a reference to the exception object in the specified reference variable.

Hint

This change was also transported back to Release 6.20.

Modification 4   

IF FOUND addition for the INCLUDE statement

The new addition IF FOUND can be used to prevent syntax errors in the statement [INCLUDE](javascript:call_link\('abapinclude_prog.htm'\)) if the specified program cannot be found.

Modification 5   

Data Compression with GZIP

System classes with methods for compressing character chains and byte chains with GZIP were introduced (see [classes for compressing data](javascript:call_link\('abencl_abap_gzip.htm'\))).

Hint

This change was also transported back to Release 6.20.

Modification 6   

Random Number Generator

System classes for creating pseudo random numbers were introduced (see [classes for mathematical operations](javascript:call_link\('abencl_abap_math.htm'\))).

Modification 7   

New Method in CL\_SYSTEM\_TRANSACTION\_STATE

In class CL\_SYSTEM\_TRANSACTION\_STATE there is a new method GET\_SAP\_LUW\_KEY for determining the update key.

Modification 8   

Variant MESSAGE oref for Messages

If the variant [MESSAGE oref](javascript:call_link\('abapmessage_msg.htm'\)) is used, only one object reference variable can be specified whose dynamic type implements the system interface IF\_T100\_MESSAGE for oref. The attributes of the interface identify the message to be sent in table T100. The use of classes (introduced in Release 6.20) that only implement the interface IF\_MESSAGE is obsolete and only allowed for compatibility reasons.

Modification 9   

Behavior of Error Messages in LOAD-OF-PROGRAM

From Release 6.40, a program is terminated with the runtime error SYSTEM\_LOAD\_OF\_PROGRAM\_FAILED if the event block for LOAD-OF-PROGRAM contains an [error message](javascript:call_link\('abenerror_message_glosry.htm'\) "Glossary Entry"). Before Release 6.40, the system behaved according to the context where the program was loaded.

Modification 10   

Revision of ABAP Keyword Documentation

The ABAP keyword documentation has been completely revised. An alphabetical [quick reference](javascript:call_link\('abenabap_shortref.htm'\)), an [ABAP glossary](javascript:call_link\('abenabap_glossary.htm'\)), and an alphabetic [ABAP index](javascript:call_link\('abenabap_index.htm'\)) have been added. F1 Help in ABAP Editor and Screen Painter analyzes the index and the glossary.

The color code in the hyperlinks has been changed as follows:

-   [Link](javascript:call_link\('abenabap.htm'\)) in the keyword documentation
-   [Link](javascript:call_link\('abenabap_glosry.htm'\) "Glossary Entry") to a glossary entry
-   Link to a program in the current AS ABAP.