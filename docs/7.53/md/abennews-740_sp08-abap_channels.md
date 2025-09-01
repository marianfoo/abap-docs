  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Release 7.40 and Its SPs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-740.htm) →  [Changes in Release 7.40, SP08](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-740_sp08.htm) → 

ABAP Channels in Release 7.40, SP08

[1\. Protocol for ABAP Messaging Channels](#!ABAP_MODIFICATION_1@1@)

[2\. New classes and interfaces for ABAP Push Channels](#!ABAP_MODIFICATION_2@2@)

[3\. Subprotocol for ABAP Push Channels](#!ABAP_MODIFICATION_3@3@)

Modification 1

Protocol for ABAP Messaging Channels

From Release 7.40, SP05, [ABAP Messaging Channels (AMC)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamc.htm) can be used to send and receive messages in SAP's own [Push Channel Protocol (PCP)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpush_channel_protocol_glosry.htm "Glossary Entry"). This uses the message type PCP and the class CL\_AC\_MESSAGE\_TYPE\_PCP for serializing and deserializing ABAP data. The documentation for [AMC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamc.htm) and the associated [executable examples](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamc_abexas.htm) have been revised to reflect this.

Modification 2

New Classes and Interfaces for ABAP Push Channels

The previous classes and interfaces in the [APC frameworks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenapc.htm), introduced using the prefixes IF\_APC\_WS\_ and CL\_APC\_WS\_, are replaced by the (identically named) classes and interfaces with the prefixes IF\_APC\_WSP\_ and CL\_APC\_WSP\_. Unlike the previous classes and interfaces, the new classes and interfaces also support optional subprotocols of the WebSocket protocol.

It is recommended that the new classes and interfaces are used. When new ABAP Push Channels are created, the APC handler class becomes the subclass of the new class CL\_APC\_WSP\_EXT\_STATELESS\_BASE automatically. The previous classes and interfaces have been kept for compatibility reasons but can be switched easily to the new classes and interfaces. New functions, such as the method ON\_ACCEPT of the interface IF\_APC\_WSP\_EXTENSION, are accepted only for the new classes and interfaces.

Modification 3

Subprotocol for ABAP Push Channels

A subprotocol can be specified when creating an [ABAP Push Channel (APC)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenapc.htm). Currently, SAP's own [Push Channel Protocol (PCP)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpush_channel_protocol_glosry.htm "Glossary Entry") can be specified. The APC framework contains new classes and interfaces for handling messages in the PCP format. The APC handler class of an ABAP Push Channel with PCP is generated accordingly. ABAP Push Channels can be associated with an [ABAP Messaging Channel (AMC)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamc.htm) with the appropriate message type, PCP. For WebSocket clients, the API for PCP is provided as a JavaScript file in the MIME repository.