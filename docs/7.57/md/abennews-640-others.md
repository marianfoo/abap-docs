  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 6.xx](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-6.htm) →  [News for Release 6.40](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-640.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Further Changes in Release 6.40, ABENNEWS-640-OTHERS, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

Further Changes in Release 6.40

[1\. VALUE Addition for All DATA Statements](#!ABAP_MODIFICATION_1@1@)
[2\. LEAVE TO CURRENT TRANSACTION](#!ABAP_MODIFICATION_2@2@)
[3\. INTO Addition for the CLEANUP Statement](#!ABAP_MODIFICATION_3@3@)
[4\. IF FOUND Addition for the INCLUDE Statement](#!ABAP_MODIFICATION_4@4@)
[5\. Data Compression with GZIP](#!ABAP_MODIFICATION_5@5@)
[6\. Random Number Generator](#!ABAP_MODIFICATION_6@6@)
[7\. New Method in CL\_SYSTEM\_TRANSACTION\_STATE](#!ABAP_MODIFICATION_7@7@)
[8\. Variant MESSAGE oref for Messages](#!ABAP_MODIFICATION_8@8@)
[9\. Behavior of Error Messages in LOAD-OF-PROGRAM](#!ABAP_MODIFICATION_9@9@)
[10\. Revision of ABAP Keyword Documentation](#!ABAP_MODIFICATION_10@10@)

Modification 1   

VALUE Addition for All DATA Statements

The addition VALUE can now be used in all variants of the statement [DATA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata.htm) and in all related statements, like [CONSTANTS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconstants.htm). Previously, the addition could not be used when creating bound table types. It is now also possible to create constants with bound table types.

Modification 2   

LEAVE TO CURRENT TRANSACTION

If the new addition CURRENT TRANSACTION is specified after [LEAVE TO TRANSACTION,](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapleave_to_transaction.htm) the current [transaction](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentransaction_glosry.htm "Glossary Entry") is called using the transaction code used to call CALL TRANSACTION or LEAVE TO TRANSACTION. Except in the case of a [parameter transaction](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenparameter_transaction_glosry.htm "Glossary Entry") or [variant transactions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvariant_transaction_glosry.htm "Glossary Entry"), this is the same transaction code as in the sy-tcode system field. For parameter or variant transactions it is their transaction code, while sy-tcode contains the name of the implicitly called [dialog transaction](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendialog_transaction_glosry.htm "Glossary Entry"). The transaction code for the current transaction can also be obtained using the new static method GET\_CURRENT\_TRANSACTION of class CL\_DYNPRO.

Hint

This change was also transported back to Release 6.20.

Modification 3   

INTO Addition for the CLEANUP Statement

The new addition INTO of the statement [CLEANUP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcleanup.htm) is used to make a reference to the exception object in the specified reference variable.

Hint

This change was also transported back to Release 6.20.

Modification 4   

IF FOUND Addition for the INCLUDE Statement

The new addition IF FOUND can be used to prevent syntax errors in the statement [INCLUDE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinclude_prog.htm) if the specified program cannot be found.

Modification 5   

Data Compression with GZIP

System classes with methods for compressing character chains and byte chains with GZIP were introduced (see [classes for compressing data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_abap_gzip.htm)).

Hint

This change was also transported back to Release 6.20.

Modification 6   

Random Number Generator

System classes for creating pseudo random numbers were introduced (see [classes for mathematical operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_abap_math.htm)).

Modification 7   

New Method in CL\_SYSTEM\_TRANSACTION\_STATE

In class CL\_SYSTEM\_TRANSACTION\_STATE there is a new method GET\_SAP\_LUW\_KEY for determining the update key.

Modification 8   

Variant MESSAGE oref for Messages

If the variant [MESSAGE oref](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage_msg.htm) is used, only one object reference variable can be specified whose dynamic type implements the system interface IF\_T100\_MESSAGE for oref. The attributes of the interface identify the message to be sent in table T100. The use of classes (introduced in Release 6.20) that only implement the interface IF\_MESSAGE is obsolete and only allowed for compatibility reasons.

Modification 9   

Behavior of Error Messages in LOAD-OF-PROGRAM

From Release 6.40, a program is terminated with the runtime error SYSTEM\_LOAD\_OF\_PROGRAM\_FAILED if the event block for LOAD-OF-PROGRAM contains an [error message](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenerror_message_glosry.htm "Glossary Entry"). Before Release 6.40, the system behaved according to the context where the program was loaded.

Modification 10   

Revision of ABAP Keyword Documentation

The ABAP keyword documentation has been completely revised. An alphabetical [quick reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm), an [ABAP glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm), and an alphabetic [ABAP index](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_index.htm) have been added. F1 Help in ABAP Editor and Screen Painter analyzes the index and the glossary.

The color code in the hyperlinks has been changed as follows:

-   [Link](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) in the keyword documentation
-   [Link](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glosry.htm "Glossary Entry") to a glossary entry
-   Link to a program in the current AS ABAP.