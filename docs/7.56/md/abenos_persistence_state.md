  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [Object Services (OS)](javascript:call_link\('abenabap_object_services.htm'\)) →  [OS - Persistence Service](javascript:call_link\('abenabap_object_services_persist.htm'\)) → 

OS - Management States in the Persistence Service

An object of a persistent class managed by the persistence service can have one of seven different management states. The state of the object affects what methods of the persistence service can be performed on it. The methods of the interface IF\_OS\_CA\_INSTANCE provide information about the state of managed objects.

The following constants of the type pool OSCON return the state of the object:

Constant

Value

State

OSCON\_OSTATUS\_NOT\_LOADED

0

Representative object for a persistent object, data not yet loaded from the database.

OSCON\_OSTATUS\_NEW

1

The object is persistent and is new.

OSCON\_OSTATUS\_LOADED

2

The object is persistent and has been loaded completely.

OSCON\_OSTATUS\_CHANGED

3

The object is persistent and has been changed.

OSCON\_OSTATUS\_DELETED

4

The object is persistent and has been deleted.

OSCON\_OSTATUS\_TRANSIENT

10

The object is transient.

OSCON\_OSTATUS\_LOADING

12

The object is currently being loaded.

The states 0 to 4 describe persistent objects with a connection to the database. An object in state 10 is managed by the persistence service but has no connection to the database.

An object in state 12 is in transition to the state OSCON\_OSTATUS\_LOADED. This state can be observed only in the method INIT of the interface IF\_OS\_STATE, which means it is no longer listed in the following tables.

The table below indicates the methods of the persistence service that can be performed on objects in different states, and how they affect the state of the managed object. The last row shows the effect of the statement COMMIT WORK.

Method

\-

0

1

2

3

4

10

CREATE\_PERSISTENT

1

1

exc

exc

exc

3

exc

DELETE\_PERSISTENT

\-

4

0

4

4

4

exc

GET\_PERSISTENT

2

2

1

2

3

exc

exc

GET\_attribute

exc

2

1

2

3

exc

10

SET\_attribute

exc

3

1

3

3

exc

10

REFRESH\_PERSISTENT

exc

0

exc

0

exc

exc

exc

RELEASE

exc

\-

exc

\-

exc

exc

exc

CREATE\_TRANSIENT

10

exc

exc

exc

exc

exc

exc

GET\_TRANSIENT

exc

exc

exc

exc

exc

exc

10

COMMIT WORK

\-

0

0

0

0

\-

10

All methods except GET\_attribute and SET\_attribute are methods of the class agent. For simplicity, the class methods and interface methods are summarized using their typical names. GET\_attribute and SET\_attribute are methods of the persistent class.

The numbers reflect the management states. For example, the method DELETE\_PERSISTENT shifts a persistent object from the state 0, 2, 3, or 4 to the state 4.

The dash (-) indicates that an object of a persistent class is available but cannot be managed. A situation like this may occur, for example, if the system deletes a persistent object by passing a reference to the method DELETE\_PERSISTENT. The statement COMMIT WORK deletes the object from the database and it is no longer managed. However, it is persisted in the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") until all references to it are also deleted.

As can be seen in the table, the methods DELETE\_PERSISTENT, GET\_PERSISTENT, and REFRESH\_PERSISTENT can work only with persistent objects in a state from 0 to 4, while GET\_TRANSIENT can work only with transient objects in the state 10.

Any attempt to apply a method to a management state inappropriately raises an exception, exc.