  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [RFC - Remote Function Call](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc.htm) →  [RFC Overview](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc_intro_oview.htm) → 

RFC Trust Relationships

A calling AS ABAP can be defined in the called AS ABAP as a [trusted system](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentrusted_system_glosry.htm "Glossary Entry"). The called system is then known as a [trusting system](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentrusting_system_glosry.htm "Glossary Entry"). This relationships are defined in transaction SMT1

A trusted [AS ABAP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_nw_abap_glosry.htm "Glossary Entry") can log on to another AS ABAP without a password. These relationships between AS ABAP systems have the following benefits:

-   "Single sign-on" can be used across systems

-   Passwords are not transported over the network

-   Timeout mechanism for logon data prevents misuse

-   User-specific logon data for the trusted system is checked.

More Information

For a detailed description of a trusted relationship between two AS ABAP systems, see RFC documentation on [SAP Help Portal](http://help.sap.com).