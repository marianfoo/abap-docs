---
title: "RFC - Trust Relationships"
description: |
  A calling AS ABAP can be defined in an AS ABAP to be called as a trusted system(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentrusted_system_glosry.htm 'Glossary Entry'). The system to be called is then known as a trusting system(https://help.sap.com/doc/abapdocu_758_index_htm/7
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensmt1_2.htm"
abapFile: "abensmt1_2.htm"
keywords: ["do", "if", "try", "data", "abensmt1"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [Remote Function Call (RFC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrfc.htm) →  [RFC - Overview](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrfc_intro_oview.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RFC%20-%20Trust%20Relationships%2C%20ABENSMT1_2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RFC - Trust Relationships

A calling AS ABAP can be defined in an AS ABAP to be called as a [trusted system](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentrusted_system_glosry.htm "Glossary Entry"). The system to be called is then known as a [trusting system](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentrusting_system_glosry.htm "Glossary Entry"). Trust relationships are defined in transaction SMT1.

A trusted [AS ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenas_abap_glosry.htm "Glossary Entry") can log on to another AS ABAP without a password. These confidential relationships between AS ABAP systems have the following benefits:

-   Single sign-on can be used across systems borders
-   Passwords are not transported over the network
-   Timeout mechanism for logon data prevents misuse
-   User-specific logon data for the calling system is checked.

More Information   

For a detailed description of a trusted relationship between two AS ABAP systems, see the documentation [RFC](https://help.sap.com/docs/ABAP_PLATFORM_NEW/753088fc00704d0a80e7fbd6803c8adb/4888068AD9134076E10000000A42189D) in SAP Help Portal.