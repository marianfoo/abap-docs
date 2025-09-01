  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [Changes in Release 7.0, EhP2](javascript:call_link\('abennews-71.htm'\)) → 

Remote Function Call in Release 7.0, EhP2

[1\. Background RFC](#!ABAP_MODIFICATION_1@1@)

[2\. Local Data Queue](#!ABAP_MODIFICATION_2@2@)

[3\. SAP RFC SDK](#!ABAP_MODIFICATION_3@3@)

[4\. RFC Connectivity in SAP Java Enterprise Edition (Java EE)](#!ABAP_MODIFICATION_4@4@)

[5\. basXML as new RFC protocol](#!ABAP_MODIFICATION_5@5@)

[6\. Identification of trusted systems](#!ABAP_MODIFICATION_6@6@)

Modification 1

Background RFC

With the new [Background RFC](javascript:call_link\('abenbg_remote_function_glosry.htm'\) "Glossary Entry") (bgRFC) Remote Function Calls can be carried out safely in a transaction and in the call sequence. The calling application and the called application are connected asynchronously. bgRFC replaces the functions previously provided by tRFC and qRFC (but not qRFC No-Send).

Note

This modification was also added to Release 7.0 in SP14.

Modification 2

Local Data Queue

The Local Data Queue (LDQ) is a persistence layer into which data can be placed. This data can only be read in the order that it is recorded in. This involves separation of data recording from data retrieval by the receiver like in an inbox. Since the access order is defined according to the First-In First-Out (FIFO) principle, queues are used as the organizational element for the individual receivers. The LDQ replaces the functions previously provided by the qRFC No-Send scenario.

Modification 3

SAP RFC SDK

The new SAP RFC SDK replaces the classic RFC SDK. It supports a revised API that can be used like the SAP Java Connector.

Modification 4

RFC Connectivity in SAP Java Enterprise Edition (Java EE)

For the SAP Java Enterprise Edition (Java EE), the SAP Java Resource Adapter (SAP JRA) for SAP JCo is provided. It provides connections to resources in accordance with JCA 1.5 SAP JCo.

Modification 5

basXML as New RFC Protocol

The [basXML](javascript:call_link\('abenbasxml_glosry.htm'\) "Glossary Entry") format is supported as the new standard [RFC protocol](javascript:call_link\('abenrfc_protocol.htm'\)) and replaces the previous formats.

Modification 6

Identification of Trusted Systems

In transaction SMT1 for editing [RFC trust relationships](javascript:call_link\('abensmt1_2.htm'\)), the installation number is now also used when creating [trusted systems](javascript:call_link\('abentrusted_system_glosry.htm'\) "Glossary Entry") by entering the system ID (name of the [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry")). This applies to all trusted systems from Releases 7.02, EhP2 and 7.2 (including 7.1).

When creating a trusted relationship from Release 7.0, EhP2, the [trusting system](javascript:call_link\('abentrusting_system_glosry.htm'\) "Glossary Entry") checks the installation number of the calling system, if it is specified in transaction SMT1. For trust relationships of this kind, the relevant authorizations need to be modified so that field RFC\_INFO in authorization object S\_RFCACL contains the installation number of the calling system.