  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Release 7.40 and Its SPs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-740.htm) →  [Changes in Release 7.40, SP02](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-740_sp02.htm) → 

Further Changes in Release 7.40, SP02

[1\. ABAP Doc](#!ABAP_MODIFICATION_1@1@)
[
2\. Authorization check in CALL TRANSACTION](#!ABAP_MODIFICATION_2@2@)
[
3\. Enhancement to RTTI](#!ABAP_MODIFICATION_3@3@)
[
4\. Documentation moved](#!ABAP_MODIFICATION_4@4@)

Modification 1

ABAP Doc

Special [ABAP Doc comments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_doc_comment_glosry.htm "Glossary Entry") can be entered in front of [declaration statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclaration_statement_glosry.htm "Glossary Entry"). These comments are prefixed by "!. An ABAP development environment that supports [ABAP Doc](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_doc_glosry.htm "Glossary Entry"), such as [ABAP Development Tools](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadt_glosry.htm "Glossary Entry"), analyzes the content of ABAP Doc comments, converts it to HTML and displays the content in an appropriate way.

Modification 2

Authorization Check in CALL TRANSACTION

The new additions [WITH AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transaction_authority.htm) and [WITHOUT AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transaction_authority.htm) make it possible to perform or skip an authorization check when executing the statement [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transaction.htm). This makes the statement CALL TRANSACTION [obsolete](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transaction_auth_obs.htm) if neither of these additions are specified.

Modification 3

Enhancement to RTTI

The attribute METHODS of the object description class CL\_ABAP\_OBJECTDESCR has a new component, IS\_RAISING\_EXCPS, which can be used to determined whether the exception of a method is class-based. Also, the tabular component EXCEPTIONS the new component IS\_RESUMABLE, which can be used to determine whether a class-based exception can be propagated as a resumable exception.

Modification 4

Documentation Moved

The documentation describing

-   [shared objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shared_objects.htm)
    
-   [object services](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_object_services.htm)
    
-   [iXML Library](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_ixml_lib.htm)
    
-   [sXML Library](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sxml_lib.htm)
    
-   [logical databases](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb.htm)
    

has been integrated into the ABAP keyword documentation.