  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [Remote Function Call (RFC)](javascript:call_link\('abenrfc.htm'\)) →  [RFC - Overview](javascript:call_link\('abenrfc_intro_oview.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RFC%20-%20Trust%20Relationships%2C%20ABENSMT1_2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RFC - Trust Relationships

A calling AS ABAP can be defined in an AS ABAP to be called as a [trusted system](javascript:call_link\('abentrusted_system_glosry.htm'\) "Glossary Entry"). The system to be called is then known as a [trusting system](javascript:call_link\('abentrusting_system_glosry.htm'\) "Glossary Entry"). Trust relationships are defined in transaction SMT1.

A trusted [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") can log on to another AS ABAP without a password. These confidential relationships between AS ABAP systems have the following benefits:

-   Single sign-on can be used across systems borders
-   Passwords are not transported over the network
-   Timeout mechanism for logon data prevents misuse
-   User-specific logon data for the calling system is checked.

More Information   

For a detailed description of a trusted relationship between two AS ABAP systems, see the documentation [RFC](https://help.sap.com/docs/ABAP_PLATFORM_NEW/753088fc00704d0a80e7fbd6803c8adb/4888068AD9134076E10000000A42189D) in SAP Help Portal.