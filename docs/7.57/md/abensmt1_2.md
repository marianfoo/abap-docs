  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [Remote Function Call (RFC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc.htm) →  [RFC - Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_intro_oview.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RFC - Trust Relationships, ABENSMT1_2, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0AS
uggestion for improvement:)

RFC - Trust Relationships

A calling AS ABAP can be defined in an AS ABAP to be called as a [trusted system](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentrusted_system_glosry.htm "Glossary Entry"). The system to be called is then known as a [trusting system](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentrusting_system_glosry.htm "Glossary Entry"). Trust relationships are defined in transaction SMT1.

A trusted [AS ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_abap_glosry.htm "Glossary Entry") can log on to another AS ABAP without a password. These confidential relationships between AS ABAP systems have the following benefits:

-   "Single sign-on" can be used across systems borders
-   Passwords are not transported over the network
-   Timeout mechanism for logon data prevents misuse
-   User-specific logon data for the calling system is checked.

More Information   

For a detailed description of a trusted relationship between two AS ABAP systems, see the documentation RFC in SAP Help Portal.