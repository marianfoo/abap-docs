  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.40 and its SPs](javascript:call_link\('abennews-740.htm'\)) →  [News for ABAP Release 7.40, SP08](javascript:call_link\('abennews-740_sp08.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Channels%20in%20ABAP%20Release%207.40%2C%20SP08%2C%20ABENNEWS-740_SP08-ABAP_CHANNELS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20fo
r%20improvement:)

ABAP Channels in ABAP Release 7.40, SP08

[1\. Protocol for ABAP Messaging Channels](#!ABAP_MODIFICATION_1@1@)
[2\. New Classes and Interfaces for ABAP Push Channels](#!ABAP_MODIFICATION_2@2@)
[3\. Subprotocol for ABAP Push Channels](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Protocol for ABAP Messaging Channels

From ABAP release 7.40, SP05, [ABAP Messaging Channels (AMC)](javascript:call_link\('abenamc.htm'\)) can be used to send and receive messages in SAP's own [Push Channel Protocol (PCP)](javascript:call_link\('abenpush_channel_protocol_glosry.htm'\) "Glossary Entry"). This uses the message type PCP and the class CL\_AC\_MESSAGE\_TYPE\_PCP for serializing and deserializing ABAP data. The documentation for [AMC](javascript:call_link\('abenamc.htm'\)) and the associated [executable examples](javascript:call_link\('abenamc_abexas.htm'\)) have been revised to reflect this.

Modification 2   

New Classes and Interfaces for ABAP Push Channels

The previous classes and interfaces in the [APC frameworks](javascript:call_link\('abenapc.htm'\)), introduced using the prefixes IF\_APC\_WS\_ and CL\_APC\_WS\_, are replaced by the (identically named) classes and interfaces with the prefixes IF\_APC\_WSP\_ and CL\_APC\_WSP\_. Unlike the previous classes and interfaces, the new classes and interfaces also support optional subprotocols of the WebSocket protocol.

It is recommended that the new classes and interfaces are used. When new ABAP push channels are created, the APC handler class becomes the subclass of the new class CL\_APC\_WSP\_EXT\_STATELESS\_BASE automatically. The previous classes and interfaces have been kept for compatibility reasons but can be switched easily to the new classes and interfaces. New functions, such as the method ON\_ACCEPT of the interface IF\_APC\_WSP\_EXTENSION, are accepted only for the new classes and interfaces.

Modification 3   

Subprotocol for ABAP Push Channels

A subprotocol can be specified when creating an [ABAP Push Channel (APC)](javascript:call_link\('abenapc.htm'\)). Currently, SAP's own [Push Channel Protocol (PCP)](javascript:call_link\('abenpush_channel_protocol_glosry.htm'\) "Glossary Entry") can be specified. The APC framework contains new classes and interfaces for handling messages in the PCP format. The APC handler class of an ABAP push channel with PCP is generated accordingly. ABAP push channels can be linked with an [ABAP Messaging Channel (AMC)](javascript:call_link\('abenamc.htm'\)) with the appropriate message type, PCP. For WebSocket clients, the API for PCP is provided as a JavaScript file in the MIME repository.