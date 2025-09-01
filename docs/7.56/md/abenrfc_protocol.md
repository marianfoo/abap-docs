  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [Remote Function Call (RFC)](javascript:call_link\('abenrfc.htm'\)) →  [RFC - Overview](javascript:call_link\('abenrfc_intro_oview.htm'\)) → 

RFC - Protocol

The RFC protocol describes how data is passed to and from the RFC interface.

basXML

[basXML](javascript:call_link\('abenbasxml_glosry.htm'\) "Glossary Entry") is available as a uniform format for all types of parameter passing. To use basXML, it must be specified in both transaction SM59 and in the transmission protocol for the destination and explicitly when creating an [RFM](javascript:call_link\('abenrfm_glosry.htm'\) "Glossary Entry").

If one of these two prerequisites is not met, for example, for communication with systems in earlier releases, in which basXML is not yet available, the RFC protocol is selected implicitly depending on the parameter type:

-   An internal binary format is used for flat parameters as well as when using [TABLES](javascript:call_link\('abapcall_function_destination_para.htm'\)) parameters.
-   An XML format known as xRFC is used for deep parameters.

Hints

-   For reasons of uniformity, the use of basXML is recommended as an RFC protocol for all types of parameter passes.
-   The performance of basXML is currently somewhere between the quicker binary format and the slower xRFC.
-   The binary format should therefore only be used for RFMs with critical performance requirements.

Fast Serialization

The protocol fast serialization is described in the documentation RFC in SAP Help Portal.

Hint

With fast serialization, data is passed using a name-based method and incompatible parameters are handled according to the rules of [lossless assignments](javascript:call_link\('abenlossless_assignment_glosry.htm'\) "Glossary Entry").

More Information

For more information about the RFC protocols, see the documentation RFC in SAP Help Portal.