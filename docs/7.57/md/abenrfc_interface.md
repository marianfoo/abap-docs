  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [Remote Function Call (RFC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc.htm) →  [RFC - Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_intro_oview.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RFC - Interface, ABENRFC_INTERFACE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugg
estion for improvement:)

RFC - Interface

The RFC interface is required to execute a remote function call. The RFC interface performs the following services:

-   Calling and controlling the communication routines that are needed to communicate with the remote system
-   Logging on to and log off from the remote system and authorization checks for the function pools used.
-   Converting actual parameters to the format required in the remote system and vice-versa. This includes any platform-dependent conversions, for example, for different [code pages](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencodepage_glosry.htm "Glossary Entry") or byte orders, for example. The conversion supports all ABAP data types.
-   Handling of errors that occur during communication and forwarding them to the caller if [requested](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_exception.htm).

If the AS ABAP are not the same, two ABAP programs communicate with each other using the RFC interface, whereas for communication between an AS ABAP and an external system, an ABAP program connects with a program in a different programming language (C, C++, Visual Basic, Java or .NET).

For communication with programs in other programming languages, RFC libraries are available for all operating systems supported by SAP, including MS Windows, Unix and Linux:

-   Java Connector (JCo) for Java
-   .NET) Connector for .NET) (C#, VB.NET)
-   RFC Software Development Kit (SDK) for C and C++

Hint

Each execution of an RFC using the RFC interface on an AS ABAP takes place in its own user session. The logon data is usually stored in the RFC destination.

More Information   

For more information about the about the RFC interface, see the documentation RFC in SAP Help Portal.