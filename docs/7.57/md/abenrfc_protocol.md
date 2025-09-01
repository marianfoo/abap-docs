---
title: "RFC - Protocol"
description: |
  The RFC protocol describes how data is passed to and from the RFC interface. basXML basXML(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbasxml_glosry.htm 'Glossary Entry') is available as a uniform format for all types of parameter passing. To use basXML, it must be specified in
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_protocol.htm"
abapFile: "abenrfc_protocol.htm"
keywords: ["select", "do", "if", "try", "method", "data", "types", "abenrfc", "protocol"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [Remote Function Call (RFC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc.htm) →  [RFC - Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_intro_oview.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RFC - Protocol, ABENRFC_PROTOCOL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion for improvement:)

RFC - Protocol

The RFC protocol describes how data is passed to and from the RFC interface.

basXML   

[basXML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbasxml_glosry.htm "Glossary Entry") is available as a uniform format for all types of parameter passing. To use basXML, it must be specified in both transaction SM59 and in the transmission protocol for the destination and explicitly when creating an [RFM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfm_glosry.htm "Glossary Entry").

If one of these two prerequisites is not met, for example, for communication with systems in earlier releases, in which basXML is not yet available, the RFC protocol is selected implicitly depending on the parameter type:

-   An internal binary format is used for flat parameters as well as when using [TABLES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_destination_para.htm) parameters.
-   An XML format known as xRFC is used for deep parameters.

Hints

-   For reasons of uniformity, the use of basXML is recommended as an RFC protocol for all types of parameter passes.
-   The performance of basXML is currently somewhere between the quicker binary format and the slower xRFC.
-   The binary format should therefore only be used for RFMs with critical performance requirements.

Fast Serialization   

The protocol fast serialization is described in the documentation RFC in SAP Help Portal.

Hint

With fast serialization, data is passed using a name-based method and incompatible parameters are handled according to the rules of [lossless assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlossless_assignment_glosry.htm "Glossary Entry").

More Information   

For more information about the RFC protocols, see the documentation RFC in SAP Help Portal.