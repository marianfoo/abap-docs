  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [RFC - Remote Function Call](javascript:call_link\('abenrfc.htm'\)) →  [RFC - Overview](javascript:call_link\('abenrfc_intro_oview.htm'\)) → 

RFC - Trust Relationships

A calling AS ABAP can be defined in the called AS ABAP as a [trusted system](javascript:call_link\('abentrusted_system_glosry.htm'\) "Glossary Entry"). The called system is then known as a [trusting system](javascript:call_link\('abentrusting_system_glosry.htm'\) "Glossary Entry"). This relationships are defined in transaction SMT1

A trusted [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") can log on to another AS ABAP without a password. These relationships between AS ABAP systems have the following benefits:

-   "Single sign-on" can be used across systems

-   Passwords are not transported over the network

-   Timeout mechanism for logon data prevents misuse

-   User-specific logon data for the trusted system is checked.

More Information

For a detailed description of a trusted relationship between two AS ABAP systems, see RFC documentation in SAP Help Portal.